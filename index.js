export const myName = "Hset Paing";
export const showName = () => {
    return myName;
}

export const showNameUI = () => {
    const h1 = document.createElement("h1");
    h1.innerText = myName;
    document.body.append(h1);
    // return "<h1>"+myName+"</h1>";
}

console.log(showNameUI())
