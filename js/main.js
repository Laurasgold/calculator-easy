let result = document.getElementById("result")

// need to use all to get all of the content from all of the li tags, then once you get the value you can assign the values to the numbers
let nums = document.querySelectorAll("li")

for (let i = 0; i < nums.length; i++) {
  // .innerHTML is for getting just the content itself in the html tags
  // console.log(nums[i].innerHTML)

  nums[i].addEventListener("click", function () {
    let getValue = document.getElementById("result").value

    if (nums[i].innerHTML == "=") {
      result.value = eval(result.value)
    } else {
      if (nums[i].innerHTML == "C" || nums[i].innerHTML == "CE") {
        result.value = ""
      } else {
        result.value += nums[i].innerHTML
      }
      if (nums[i].innerHTML == "Del") result.value = getValue.slice(0, -1)
    }
  })
}
