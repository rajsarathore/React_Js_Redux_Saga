import React from 'react';
import { connect } from 'react-redux';
import { getUsersAction } from '../redux/sagas';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            users:[],
            groups:[]
        }
    }
    componentDidMount(){
        this.props.dispatch(getUsersAction())
    }
    static getDerivedStateFromProps(props,state){
        const users=[];
        if(state.users.length<=0){
            props.users.map(user=>{
                users.push({
                        ...user,
                        isSelected:false
                })
            })
            return {
                ...state,
                users
            }
        }
        return state;
    }
  
    addGroup=()=>{
        const groups=[];
        this.state.users.map(user=>{
            if(user.isSelected)
                groups.push(user);
        });
        this.setState({groups})
        
    }
    addUser=(clickedUser)=>{
        const users=[];
        this.state.users.map(user=>{
            if(user.id==clickedUser.id)
                users.push({
                        ...user,
                        isSelected:!clickedUser.isSelected
                })
            else
            users.push({
                ...user
        })

        })
        this.setState({users})
        
    }
    componentDidUpdate(){
        console.log(" mounted : " + JSON.stringify(this.state.users))
    }
    render(){
        const {users}=this.props
        return (
        <div>
            <h1>Users</h1>
            {this.state.users.map(user=>(
                <div>
                    <img style={{width:"200px",height:"200px"}} src={user.Image} alt='image'></img>
                    <span>{user.name}</span>
                    <input type="checkbox" onChange={()=>this.addUser(user)} defaultChecked={user.isSelected}></input>
                </div>
            ))}
            <button onClick={this.addGroup}>Create Group</button>
            <h1>Groups</h1>
            {this.state.groups.map(user=>(
                <div>
                    <img style={{width:"200px",height:"200px"}} src={user.Image} alt='image'></img>
                    <span>{user.name}</span>
                </div>
            ))}
        </div>
        )
    }
}

function mapStateToProps(state) {
    const { users, groups } = state

    return {
        users,
        groups
    }
      
  }
  
export default connect(mapStateToProps)(Home);