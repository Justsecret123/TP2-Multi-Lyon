class PostitTitle extends React.Component{
    render(){
        const title = this.props.title; 
        return(
            <tr>
                <th colspan="2">
                    {title}
                </th>
            </tr>
        );
    }
}

class PostitRow extends React.Component{
    render(){
        const postit = this.props.postit; 
        const text = postit.created ? 
            postit.text : 
            <span style={{color: 'orange'}}>
                {postit.text}
            </span>;
        
        return (
            <tr>
                <td>postit.text</td>
            </tr>
        );
    }
}

class Board extends React.Component {
    render(){
        const rows = []; 
        let lastTitle = null;

        this.props.postits

    }
}