import React, { Component } from 'react';
import './region.css';

class NewsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: props.section, // Initialize section from props
            feedData: [],
        };
    }

    formatDate = (pubDate) => {
        const date = new Date(pubDate);
        const monthNames = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
        ];
        const formattedDate = `${
            monthNames[date.getMonth()]
        }, ${date.getDate()}, ${date.getFullYear()}`;
        return formattedDate;
    };

    fetchNews = () => {
        const { section } = this.props; // Use props instead of state
        const apiKey = 'MgSm5d1ATxJxXvJj2NimsAQlyVgd8Upl'; // Replace with your NY Times API key

        if (section) {
            const apiUrl = `https://api.nytimes.com/services/xml/rss/nyt/${section}.xml?api-key=${apiKey}`;

            fetch(apiUrl)
                .then((response) => response.text())
                .then((data) => {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(data, 'text/xml');
                    const items = xmlDoc.querySelectorAll('item');

                    const feedData = [];
                    items.forEach((item) => {
                        const title = item.querySelector('title').textContent;
                        const link = item.querySelector('link').textContent;
                        const mediaContent = item.querySelector(
                            'media\\:content, content'
                        );
                        const imageUrl = mediaContent
                            ? mediaContent.getAttribute('url')
                            : '';
                        const description =
                            item.querySelector('description').textContent;
                        const author = item.querySelector(
                            'dc\\:creator, creator'
                        ).textContent;
                        const pubDate = this.formatDate(
                            item.querySelector('pubDate').textContent
                        );

                        feedData.push({
                            title,
                            link,
                            imageUrl,
                            description,
                            author,
                            pubDate,
                        });
                    });

                    this.setState({ feedData });
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    };

    componentDidMount() {
        // Fetch news data when the component mounts
        this.fetchNews();
    }

    componentDidUpdate(prevProps) {
        // Check if the section prop has changed and fetch new data if it has
        if (prevProps.section !== this.props.section) {
            this.fetchNews();
        }
    }

    render() {
        const { feedData } = this.state;

        return (
            <div className="container">
                <ul>
                    {feedData.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="news_section"
                            >
                                <div className="news_date date_1">
                                    {item.pubDate}
                                </div>
                                <div className="news_info">
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <p className="news_author">
                                        By {item.author}
                                    </p>
                                    <div className="news_date date_2">
                                        {item.pubDate}
                                    </div>
                                </div>
                                <div className="news_img">
                                    <img src={item.imageUrl} alt={item.title} />
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default NewsFeed;

