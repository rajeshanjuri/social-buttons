const Button = (props) => {
  //  Write your code here.
  const { name, btnName } = props;
  return <button className={`btn ${name}`}>{btnName}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="title">Social Buttons</h1>
    <div className="btn-container">
      <Button name="like" btnName="Like" />
      <Button name="comment" btnName="Comment" />
      <Button name="share" btnName="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
