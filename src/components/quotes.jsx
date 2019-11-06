import React, {Component} from "react";
import { loadData } from "../utilities/loaddata";

class Quote extends Component {
    state = {
        quote: "Fetching quotes..."
    };

    async componentDidMount() {
        const category = this.props.match.params.category_name;

        this.getQuote(category);
    }

    getQuote = async () => {
        const category = "dev";

        const data = await loadData( 
            `https://api.chucknorris.io/jokes/random?category=${category}` 
        );
        const quote = data.value;

        this.setState({
            quote
        });
    };

    render() {
        const { quote } = this.state;
        const category = "dev"
        return (
            <>
        <p>{quote}</p>
        <button onClick={() => this.getQuote()}>Again!
        </button>
        </>
        );
    }
}

export default Quote;
