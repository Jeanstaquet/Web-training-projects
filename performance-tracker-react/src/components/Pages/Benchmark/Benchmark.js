import React from 'react';
import "./Benchmark.scss"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
function Benchmark(props) {
    return (
        <div className="benchmark__container">
            <section>
                <h3>Control pannel:</h3>
                <div>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                    <p>btn</p>
                </div>
            </section>
            <section>
                <h3>List of the best times around the world:</h3>
                <ul>
                    <li>exemple: XX<a href="/">report this performance</a><span>x person likes</span></li>
                </ul>
            </section>
        </div>
    );
}

export default Benchmark;