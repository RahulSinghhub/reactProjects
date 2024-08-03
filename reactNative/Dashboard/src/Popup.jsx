export default function Popup() {
    const ran1 = Math.floor(Math.random()*10)+5 ;
    return <h1> {  ran1 === 12 ?"you lose": "you win"} </h1>
}