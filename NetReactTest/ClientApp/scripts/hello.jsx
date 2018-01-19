var HelloBox = React.createClass({
    render: function () {
        return (
            <div className="helloBox">
                Hello, world!
      </div>
        );
    }
});
ReactDOM.render(
    <HelloBox />,
    document.getElementById('content')
);


