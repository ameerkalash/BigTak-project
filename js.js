function rr() {
    if (r) {
        r = false;
    } else if (!r) {
        r = true;
    }
}
let r = false;
document.getElementById("burg").addEventListener("click", function () {
    rr();
    if (r == true) {
        document.getElementById("ul-header").style = `
        display: grid;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 20px;
        width: calc(100% - 40px);
        background-color: rgb(15, 15, 15);
        box-shadow: 2px 3px 10px rgb(46, 46, 44);
        `
        this.style.color = `#e4002b`
    } else if (r == false) {
        document.getElementById("ul-header").style = `
        display:  none;
        `
        this.style.color = `beige`
    }
})