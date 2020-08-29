import PropTypes from "prop-types";

export default class ButtonBar extends Component {
	static propTypes = {
		brand: PropTypes.shape({
			name: PropTypes.string.isRequired,
			to: PropTypes.string.isRequired
		}),
		links: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string.isRequired,
				to: PropTypes.string.isRequired
			})
		)
	};

	constructor(props) {
		super(props);
		this.state = {
			show: true,
			scrollPos: 0
		};
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}
	
	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll() {
		const { scrollPos } = this.state;
		this.setState({
			scrollPos: document.body.getBoundingClientRect().top,
			show: document.body.getBoundingClientRect().top > scrollPos
		});
	}

	render() {
		return <div className={this.state.show ? "active" : "hidden"} />;
	}
}