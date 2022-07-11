const { Component, cloneElement } = require("react");

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            direction: props.children.length === 2 ? 'prev' : 'next',
            sliding: false
        };
    }

    getOrder(itemIndex) {
        const { position } = this.state;
        const { children } = this.props;
        const numItems = children.length;

        if (numItems === 2) return itemIndex;

        if (itemIndex - position < 0)
            return numItems - Math.abs(itemIndex - position);
        return itemIndex - position;
    }

    doSliding = (direction, position) => {
        this.setState({
            sliding: true,
            direction,
            position
        });

    setTimeout(() =>{
        this.setState({
            sliding: false
        });
    }, 50);
    };

    nextSlide = () => {
        const { position } = this.state;
        const { children } = this.props;
        const numItems = children.length; 

        if (numItems === 2 && position === 1) return;

        this.doSliding("next", position === numItems - 1 ? 0 : position + 1);
    };

    prevSlide = () => {
        const { position } = this.state;
        const { children } = this.props;
        const numItems = children.length;

        if (numItems === 2 && position === 0) return;
        
        this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
    };

    render() {
        const { children } = this.props;
        const {sliding, direction, positon } = this.state;

        const propsChildren = children.map(children, child =>{
            cloneElement(child, {
                numSlides: children.length || 1 
            })
        })
    }
}