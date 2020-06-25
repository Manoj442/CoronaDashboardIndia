import React,{Component,Fragment} from 'react';
import {Typography} from '@material-ui/core';
import styles from './../Cards/cards.module.css';
import logo from './../Images/india.jpg';
class Headers extends Component {
    render() {
        const props=this.props;
        const date= new Date(props.lastUpdate).toDateString() + ' ' +new Date(props.lastUpdate).toLocaleTimeString();        
        return (  
            <Fragment>    
                <h1 className={styles.titleDisplayer} align="center"> 
                {/* <img alt="India" className={styles.imageDisplayer} src={logo} />  */} COVID-19 DASHBOARD       
                </h1>
                <h4 align="center" className={styles.time}>
                {props.lastUpdate ? date : null}
                </h4> 
            </Fragment>                            
        )
    }
}
export default Headers;
