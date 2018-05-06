TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
      icon: 'https://avatars3.githubusercontent.com/u/9091491?s=40&v=4',
      text: 'Estimate Size',
      callback: function(t){
        return t.popup({
          title: "Estimation",
          url: 'estimate.html'
        });
      }
    }];
  },
  'card-badges': function(t, options) {
    return t.get('card', 'shared', 'estimate')
    .then(function(estimate) {
      return [{
        icon: 'https://avatars3.githubusercontent.com/u/9091491?s=40&v=4',
        text: estimate
      }];  
    });
  },
});
