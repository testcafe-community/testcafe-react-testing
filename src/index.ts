import { ClientFunction } from "testcafe";


export const render = ClientFunction((element) => {

        let div = document.createElement("div");
        document.body.appendChild(div);


        //@ts-ignore
        window.ReactDOM.render(window.TestcafeReactTesting.deserialize(element), div);
    });
