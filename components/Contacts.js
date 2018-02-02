var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

//metoda map bierze każdy element tablicy i przekształca je w nową listę
  render: function() {
    var contacts = this.props.items.map(function(contact) {
      return React.createElement(Contact, {item: contact, key: contact.id});
    });

    return (
      React.createElement('ul', {className: 'contactsList'}, contacts)
    );
  }
})