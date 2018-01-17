
// Best practice to inluce this function, because it ensures the document is fully loaded

$(() => {
// Longer form version of what is written below
/*
document.getElementById('#infoButton').addEventListener(() => {
      
    })
*/
$('#infoButton').click( () => {
    $.ajax({
        type: 'GET',
        url: 'https://swapi.co/api/people'
    }).done( (res) => {
        let people = res.results;
        for (person of people){
            console.log(person.name);
        }
    })
    })
})


