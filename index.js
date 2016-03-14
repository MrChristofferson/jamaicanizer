module.exports = function () {

  /**
    TODO:
    - Check for repeating hex values
    - Check for nodes that are similar
        children (like anchors) and keep those same bgc
  **/

  // Grab all nodes
  var nodes = document.all;

  // Declare nodes we don't want styled
  var unwantedNodes = ['STYLE', 'META', 'HEAD', 'HTML', 'SCRIPT'];

  // Generate random color
  function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Assign bgc to targeted nodes using randomColor()
  for(var i = 0; i < nodes.length; i++) {
    if(unwantedNodes.indexOf(nodes[i].nodeName) === -1) {
      nodes[i].style.backgroundColor = randomColor();
    };
  }

}
