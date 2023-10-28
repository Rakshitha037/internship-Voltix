import React from 'react';
import '../about/About.css'
const About = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between', // This will separate the image and description.
        alignItems: 'center', // This will vertically center the content.
        marginTop: '70px', // Adjust the value to match the height of your navbar
    };

    const descriptionStyle = {
        flex: 1, // This will make the description take up the available space.
    };
    const imageStyle = {
        maxWidth: '100%', // Limit the maximum width to 100% of the container width
        maxHeight: '100vh', // Limit the maximum height to 100% of the viewport height
    };

    return (
        <div className="about-container" style={containerStyle}>
            <div className="about-description" style={descriptionStyle}>
                <h2>About Our Company</h2>
                <p>
                    Your Company is a leader in providing innovative solutions to meet our customers' needs.
                    With a team of dedicated professionals, we have been serving clients worldwide for over a decade.
                    We believe in delivering quality and excellence in everything we do.
                </p>
            </div>
            <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
                style={{ maxWidth: '40%',height:'80%' }} // Adjust the image size as needed
            />
        </div>
    );
}

export default About;
