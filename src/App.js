import "./App.scss";

function App() {
  let listTabs = [
    { key: "a", title: "A" },
    { key: "b", title: "B" },
  ];

  let list = [
    {
      id: 1,
      title: "X",
      img: "https://cdn-i.pr.trt.com.tr/trtsales/g/images/content/1-wide.jpeg",
    },
    {
      id: 2,
      title: "Z",
      img: "https://cdn-i.pr.trt.com.tr/trtsales/g/images/content/1-wide.jpeg",
    },
    {
      id: 3,
      title: "Z",
      img: "https://cdn-i.pr.trt.com.tr/trtsales/g/images/content/1-wide.jpeg",
    },
    {
      id: 4,
      title: "Z",
      img: "https://cdn-i.pr.trt.com.tr/trtsales/g/images/content/1-wide.jpeg",
    },

    {
      id: 2,
      title: "Z",
      img: "https://cdn-i.pr.trt.com.tr/trtsales/g/images/content/1-wide.jpeg",
    },
  ];

  return (
    <div className="App">
      <div className={"container"}>
        <div className={"tabs"}>
          <div className={"tabs__header"}>
            {listTabs.map(function (o, i) {
              return (
                <div className={"tabs__header__item"} key={i}>
                  {o.title}
                </div>
              );
            }, this)}
          </div>
          <div className={"tabs__content"}>
            <div className={"tabs__content__item"}>
              <List key={"list"} list={list} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function List(props) {
  return (
    <div className={"list-container"}>
      {props.list.map(function (o, i) {
        return (
          <div className={"list-container__item"} key={i}>
            <div className={"list-container__item__img"}>
              <img src={o.img} alt={""} />
            </div>
            <h1 className={"list-container__item__title"}>{o.title}</h1>
          </div>
        );
      }, this)}
    </div>
  );
}

export default App;
