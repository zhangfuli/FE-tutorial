$(function () {

    let queryParam = {};

    getCommentFromServer(queryParam);

    $('#searchBtn').on('click', function () {
        queryParam = getQueryParam();
        getCommentFromServer(queryParam);
    });

    $('#submitBtn').on('click', function () {
        addNewCommentToServer();
        getCommentFromServer();
    }); 

  

});

function getQueryParam() {
    let searchText = $('#search').val();
    let queryParam = {};
    if (searchText !== '') {
        queryParam = {
            filter: {
                where: {
                    title: {
                        regexp: '/' + searchText + '/'
                    }
                }
            }
        }
    }else {
        queryParam = {};
    }
    return queryParam;
}

function getCommentFromServer(queryParam) {
    $('#comment-container').empty();
    let insertString = '';
    $.get({
        url: 'http://115.159.184.76:3001/api/comments',
        data: queryParam,
        success: function (res) {
            console.log(res);
            for(let item of res) {
                console.log(item);
                insertString += '<div><h3>' + item.title + '</h3><p>' + item.content + '</p><p>' + item.time + '</p></div>'
                                + '<button id = "delete_'+ item.id + '">delete</button>';
                
            }
            $('#comment-container').append(insertString);
           
            $('button').on('click' , function(){
                deleteCommentToServer(this.id)
            } );

        }
    });
}

function addNewCommentToServer() {
    let postData = {
        title: $('#title').val(),
        content: $('#content').val(),
        time: Date()
    };

    $.post({
        url: 'http://115.159.184.76:3001/api/comments',
        data: postData,
        success(res) {
            console.log(res);
        }
    })
}

function deleteCommentToServer(id) {
    if(id.indexOf('delete_') != -1){
        id = id.split('_')[1];
        console.log(id);
        $.ajax({
            type : 'DELETE',
            url : 'http://115.159.184.76:3001/api/comments/' + id ,
            success : function(msg){
                console.log(msg);
            }
        })
    }
}
