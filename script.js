
// Best practice to inluce this function, because it ensures the document is fully loaded

$(() => {
    
    let loaded = false;
    
    // Longer form version of what is written below
    /* document.getElementById('#infoButton').addEventListener(() => {
        }) */
    // Access a single parameter, the entire following function
    $('#infoButton').click( () => {
        if(!loaded){
            $.ajax({
                // Defines properties of HTTP request
                // i.e. - Where is it going?  What type is it?
                type: 'GET',
                url: 'https://swapi.co/api/people',
                //headers: { Access-Control-Allow-Origin }
            }).done( (res) => {
                let people = res.results;
                for (p of people){
                    $('#tableBody').append(createTableRow(p));
                }
            loaded = true;
            })
        }
    })

    // Asynchronous operations - i.e. ".done"
    // .results is an "array of 'people' objects"

    // Remember, functions are hoisted to the top of the scope
    function createTableRow(person){
        let row = $(`<tr></tr>`);
        // console.log(row);
        // This AJAX function will read the HTML and create that object. It will create only the opening object, if multiple HTML elements are created.
        // .append expects what represents an HTML element
        let name = $(`<td>${person.name}</td>`);
        let height = $(`<td>${person.height}</td>`);
        let birth = $(`<td>${person.birth_year}</td>`);
        name.css('color', 'red');
        row.append(name);
        row.append(height);
        row.append(birth);
    }

    // Add event listener
    $('#clearButton').click( () => {
        // Remove all of the new rows in the tableBody
        $('#tableBody').empty();
        // Reset loaded to false such that the Get Info button can be clicked again
        loaded = false;
    })
})




