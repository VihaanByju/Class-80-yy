student_array = []
function submit() {
    var display_student_array = []
    for (var j = 1; j <= 4; j++) {
        var name_of_the_student = document.getElementById("name_of_the_student_" + j).value
        console.log(name_of_the_student);
        student_array.push(name_of_the_student)
    }
    console.log(student_array)
    var length_of_array = student_array.length
    console.log(length_of_array);
    for (var k = 0; k < length_of_array; k++) {
        display_student_array.push("<h4>name :" + student_array[k] + "</h4>")
        console.log(display_student_array)
    }
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    var remove_commas = display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block"
}
function sorting() {
    student_array.sort()
    var display_student_array_sorting = []
    var length_of_array = student_array.length
    console.log(length_of_array);
    for (var k = 0; k < length_of_array; k++) {
        display_student_array_sorting.push("<h4>name :" + student_array[k] + "</h4>")
        console.log(display_student_array_sorting)
    }
    var remove_commas = display_student_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas
}

