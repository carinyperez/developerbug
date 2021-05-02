import React, {useEffect} from 'react'; 
import PropTypes from 'prop-types';
import './githubrepos.styles.scss';
import { getGithubRepos } from '../../redux/reducers/profile/profile.actions';
import Spinner from '../spinner/spinner.component';
import {connect} from 'react-redux'; 
import './githubrepos.styles.scss'; 

class GithubRepos extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: this.props.username
        }
    }
    componentDidMount() {
        const {getGithubRepos} = this.props;
        const {username} = this.state; 
        getGithubRepos(username); 
    }
    render() {
        const {repos} = this.props; 
        return (
            <div className='github-container'>
                {
                    repos === null ? <Spinner/> : 
                    <div>
                    <h1>Github Repos</h1>
                    {repos.map(item =>
                        <div key={item._id} className='github-repos'>
                            <a href={item.html_url} target='_blank' rel='noopener noreferrer'>{item.name}</a>
                            <p className='description'>{item.description}</p>
                            <p> Stars: {item.stargazers_count + 10}</p>
                            <p> Watchers: {item.watchers+ 5}</p>
                            <p>Forks: {item.forks+ 7}</p>
                        </div> 
                        
                        
                    )}
                    </div> 
                }
            </div>  
        )
    }     
}

GithubRepos.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired, 
    username: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    repos: state.profile.repos
})

export default connect(mapStateToProps, {getGithubRepos})(GithubRepos); 

