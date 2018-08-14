
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapCss.rating.item = "btn btn-default my-rating";
Survey.StylesManager.applyTheme("bootstrap");
var json = { pages: [
        {questions: [
           { type: "text", name: "Username", 
                    title: "Please enter username"},
            { type: "comment", name: "Query", title:"What is the query?", }
        ]},
       
       
    ]
};

window.survey = new Survey.Model(json);


survey.onComplete.add(function(result) {
    document.querySelector('#surveyResult').innerHTML = "Result: " + JSON.stringify(result.data);
});


$("#surveyElement").Survey({ 
    model: survey 
});


                   