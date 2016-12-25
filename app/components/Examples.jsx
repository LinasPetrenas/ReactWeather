var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Vilnius'>Vilnius, LTU</Link>
                </li>
                <li>
                    <Link to='/?location=Riga'>Riga, LV</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;
