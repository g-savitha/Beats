var row = document.querySelector(".row");
// document.querySelector("#myCanvas").appendChild(row);
document.querySelector("#message-show").classList.remove("hide");
document.querySelector("p").innerHTML = `
Press any key between (A-Z). 
<p>
<span>Works only on PC</span> <br />
<span><b>Warning!</b> contains flashing images and sounds. You may want to reduce the sound</span><br />
<span><b>Pro Tip!</b> press keys simultaneouly, too create a music</span>
</p>
`;
document.querySelector("#close").addEventListener("click", (event) => {
  document.querySelector(".row").classList.add("hide");
});
