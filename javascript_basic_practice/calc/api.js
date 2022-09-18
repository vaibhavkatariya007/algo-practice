(function () {
    const root = document.getElementById('disdata');
    const searchField = document.getElementById('searchField');
    const genderField = document.getElementById('gender');
    const radioButtons = document.querySelectorAll('.rad');
    const uri = "https://random-data-api.com/api/users/random_user?size=30";
    let API_RESPONSE = [];
    fetchData = async (uri) => {
        const rawResponse = await fetch(uri);
        const response = await rawResponse.json();
        return response;
    };


    radioButtons.forEach(r => {
        r.addEventListener('click', (e) => {
            console.log("RADIO VALUE IS::", e.target.value);
        })
    })
    genderField.addEventListener('change', (e) => {
        console.log("Select VALUE IS::", e.target.value);
    })

    searchField.addEventListener('input', (e) => {
        const searchTerm = e.target.value
        let filterList = API_RESPONSE
        if (searchTerm && searchTerm.length > 2) {
            filterList = API_RESPONSE.filter(obj => obj.first_name.toLowerCase().startsWith(searchTerm));
        }
        renderList(filterList);
    });

    renderList = (list) => {
        root.innerHTML = '';
        list.forEach((item) => {
            createList(item);
        });
    }
    createList = ({ first_name, last_name, avatar }) => {
        const div = document.createElement('div');
        div.className = 'user';
        const span = document.createElement('span');
        span.textContent = `${first_name} ${last_name}`;
        const img = document.createElement('img');
        img.setAttribute('src', avatar)
        div.appendChild(img);
        div.appendChild(span);
        root.appendChild(div);
    };

    function createUi() {
        fetchData(uri).then(res => {
            API_RESPONSE = res;
            renderList(API_RESPONSE);
        });
    }
    createUi();
})();