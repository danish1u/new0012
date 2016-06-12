  document.Echo = document["standardWrite"] == null
        ? document["write"]
        : document["standardWrite"];
      var include = function (path) {
        document.Echo('<script src="' + path + '" type="text\/javascript"><\/script>');
      };
        function fda(pic) {
        document.getElementById("PhotoDemo").src = pic;
      }
