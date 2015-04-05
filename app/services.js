angular.module('starterApp.services', [])

.service('scrollServices', function(smoothScroll){
    return {
        scrollTop: function(){
            smoothScroll(document.getElementById('top'), {offset: 50});
        }
    }
})

.factory('SiteContent', function(){
    var services = [
        {name: 'Service 1', detail: 'this is a great service...'},
        {name: 'Service 2', detail: 'this is a great service...'},
        {name: 'Service 3', detail: 'this is a great service...'},
        {name: 'Service 4', detail: 'this is a great service...'},
        {name: 'Service 5', detail: 'this is a great service...'},
        {name: 'Service 6', detail: 'this is a great service...'},
        {name: 'Service 7', detail: 'this is a great service...'},
        {name: 'Service 8', detail: 'this is a great service...'},
    ];
    
    var projects = [
        {projectId: 'proj1', name: 'Project 1', detail: 'this is a great project...'},
        {projectId: 'proj2', name: 'Project 2', detail: 'this is a great project...'},
        {projectId: 'proj3', name: 'Project 3', detail: 'this is a great project...'},
        {projectId: 'proj4', name: 'Project 4', detail: 'this is a great project...'},
        {projectId: 'proj5', name: 'Project 5', detail: 'this is a great project...'},
        {projectId: 'proj6', name: 'Project 6', detail: 'this is a great project...'},
        {projectId: 'proj7', name: 'Project 7', detail: 'this is a great project...'},
        {projectId: 'proj8', name: 'Project 8', detail: 'this is a great project...'},
    ];
    return {
        services: services,
        projects: projects
    }
})