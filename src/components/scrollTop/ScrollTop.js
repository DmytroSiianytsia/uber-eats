import React, {Component} from 'react';
import './ScrollTop.css';

class ScrollTop extends Component {
    state = {
        isVisible: false
    };

    toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            this.setState({
                isVisible: true
            });
        } else {
            this.setState({
                isVisible: false
            });
        }
    };

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            this.toggleVisibility()
        })
    }

    render() {
        const {isVisible} = this.state;
        return (
            <>
                {
                    isVisible &&
                    <button onClick={this.scrollToTop} className="btn-scroll-to-top">TO TOP</button>
                }
            </>
        );
    }
}

export default ScrollTop;
