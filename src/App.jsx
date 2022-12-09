import { useRef, useState } from "react";

import Background from "./components/background/background";
import Form from "./components/form/form";
import PageBtn from "./components/page-btn/page-btn";
import Vallet from "./components/vallet/vallet";
import ValletEdit from "./components/vallet-edit/vallet-edit";

function App() {

  const containerRef = useRef(null);
  const editRef = useRef(null);

  const [isShowForm, setIsShowForm] = useState(false);
  const [list, setList] = useState([]);
  // custom

  const isEpmty = list.length ? true : false;
 
 
  const container =
    "h-screen w-[400px] m-auto relative  overflow-hidden transition-all duration-500";
  return (
    <div className="App h-screen bg-black relative">
      <div ref={containerRef} className={container}>
        <Background state={isShowForm} isEpmty={isEpmty}>
          <Vallet
            cantainer={containerRef}
            editBtn={editRef}
            list={list}
            setList={setList}
          />
        </Background>
        <Form state={isShowForm} setList={setList} setIsShowForm={setIsShowForm}/>
        <PageBtn isShowForm={isShowForm} setIsShowForm={setIsShowForm} />
      </div>
      {/* // modal */}
      <ValletEdit editRef={editRef} />
    </div>
  );
}

export default App;
