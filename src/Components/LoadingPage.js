import React from 'react';
import '../css/loadingpage.css';

class LoadingPage extends React.Component {
    
    render(){        
        return (
            <div className="row loadingpage">
                <div className="col-md-12">
                    <h1>₹ Track<span><b>Expense</b></span>.00/-</h1>
                    <p>Manage all your expenses at your FingerTip!</p>
                    <h3>Loading....</h3>
                </div>
            </div>
        );
    }
}



export default LoadingPage;