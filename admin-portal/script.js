$(document).ready(function () {

    var mcq = '<div class="mcq-parent"><div class="form-row domain-name"><div class="form-group col-md-6"><input type="text"class="form-control"name="mcqQues-name"placeholder="Enter MCQ Question"></div></div><div class="form-row domain-name"><div class="form-group col-md-2"><input type="text"class="form-control"name="mcq-opt-a"placeholder="Option A"></div><div class="form-group col-md-2"><input type="text"class="form-control"name="mcq-opt-b"placeholder="Option B"></div><div class="form-group col-md-2"><input type="text"class="form-control"name="mcq-opt-c"placeholder="Option C"></div><div class="form-group col-md-2"><input type="text"class="form-control"name="mcq-opt-d"placeholder="Option D"></div><div class="form-group col-md-2"><input type="text"class="form-control"name="mcq-ans"placeholder="Answer"></div></div><div class="form-row domain-name"><div class="form-group col-md-6"><input type="text"class="form-control"name="tags"placeholder="Enter tags"></div><div class="form-group col-md-6"><a href="#"class="remove_field">Remove</a></div><input type="hidden"name="question-type"value="MCQ"></div></div>'
    var longAns = '<div class="la-parent"><div class="form-row domain-name"><div class="form-group col-md-6"><input type="text"class="form-control"name="laQues-name"placeholder="Enter Long Answer Question"></div><input type="hidden"name="question-type"value="LA"></div><div class="form-row domain-name"><div class="form-group col-md-6"><input type="text"class="form-control"name="tags"placeholder="Enter  Tags"></div></div><div class="form-row"><div class="form-group col-md-6"><div class="form-group col-md-6"><a href="#"class="remove_field">Remove</a></div></div></div></div>'
    $(".MCQ").on("click", () => {
        $(".first-mcq-question-wrap").append(mcq)
    });

    $(".LA").on("click", () => {

        $(".first-la-question-wrap").append(longAns)
    });

    $(".first-la-question-wrap").on("click", ".remove_field", function (e) { //user click on remove text

        e.preventDefault();
        $(this).parent('div').parent('div').parent('div').parent('div').remove();

    });
    $(".first-mcq-question-wrap").on("click", ".remove_field", function (e) { //user click on remove text

        e.preventDefault();
        $(this).parent('div').parent('div').parent('div').remove();

    });
})



