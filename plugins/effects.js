//// Particles

// Set up Particles appropriately for the environment.
(function (factory) {

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = (typeof self === 'object' && self.self === self && self) || (typeof global === 'object' && global.global === global && global);

  // AMD.
  if (typeof define === 'function' && define.amd) {
    define(['exports'], function (exports) {
      root.Particles = factory(root, exports);
    });
  }

  // Node.js or CommonJS.
  else if (typeof module === 'object' && module.exports) {
    module.exports = factory(root, {});
  }

  // Browser global.
  else {
    root.Particles = factory(root, {});
  }

}(function (root, Particles) {

  // Create Particle class
  var Particle = function (parent) {

    this.canvas = parent.canvas;
    this.ctx = parent.ctx;
    this.color = parent.options.color;

    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.velocity = {
      x: (Math.random() - 0.5) * parent.options.velocity,
      y: (Math.random() - 0.5) * parent.options.velocity
    };
  };
  Particle.prototype.update = function () {

    // Change dir if outside map
    if (this.x > this.canvas.width + 20 || this.x < -20) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y > this.canvas.height + 20 || this.y < -20) {
      this.velocity.y = -this.velocity.y;
    }

    // Update position
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  };
  Particle.prototype.draw = function () {

    // Draw particle
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = 0.7;
    this.ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
    this.ctx.fill();
  };

  // Create Particles class
  Particles = function (canvas, options) {

    this.canvasDiv = canvas;
    this.canvasDiv.size = {
      'width': this.canvasDiv.offsetWidth,
      'height': this.canvasDiv.offsetHeight
    };

    // Set options
    options = options !== undefined ? options : {};
    this.options = {
      color: (options.color !== undefined) ? options.color : '#fff',
      interactive: (options.interactive !== undefined) ? options.interactive : true,
      velocity: this.setVelocity(options.speed),
      density: this.setDensity(options.density)
    };

    this.init();
  };
  Particles.prototype.init = function () {
    // Check if valid color
    if (!(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i).test(this.options.color)) {
      console.error('Please specify a valid color hexadecimal color');
      return false;
    }

    // Create canvas & context
    this.canvas = document.createElement('canvas');
    this.canvasDiv.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.canvasDiv.size.width;
    this.canvas.height = this.canvasDiv.size.height;
    this.setStyles(this.canvasDiv, {
      'position': 'relative'
    });
    this.setStyles(this.canvas, {
      'z-index': '20',
      'position': 'relative'
    });

    // Add resize listener to canvas
    window.addEventListener('resize', function () {

      // Check if div has changed size
      if (this.canvasDiv.offsetWidth === this.canvasDiv.size.width && this.canvasDiv.offsetHeight === this.canvasDiv.size.height) {
        return false;
      }

      // Scale canvas
      this.canvas.width = this.canvasDiv.size.width = this.canvasDiv.offsetWidth;
      this.canvas.height = this.canvasDiv.size.height = this.canvasDiv.offsetHeight;

      // Set timeout to wait until end of resize event
      clearTimeout(this.resetTimer);
      this.resetTimer = setTimeout(function () {

        // Reset particles
        this.particles = [];
        for (var i = 0; i < this.canvas.width * this.canvas.height / this.options.density; i++) {
          this.particles.push(new Particle(this));
        }
        if (this.options.interactive) {
          this.particles.push(this.mouseParticle);
        }

        // Update canvas
        requestAnimationFrame(this.update.bind(this));

      }.bind(this), 500);

    }.bind(this));

    // Initialise particles
    this.particles = [];
    for (var i = 0; i < this.canvas.width * this.canvas.height / this.options.density; i++) {
      this.particles.push(new Particle(this));
    }

    if (this.options.interactive) {

      // Add mouse particle if interactive
      this.mouseParticle = new Particle(this);
      this.mouseParticle.velocity = {
        x: 0,
        y: 0
      };
      this.particles.push(this.mouseParticle);

      // Mouse event listeners
      this.canvas.addEventListener('mousemove', function (e) {
        this.mouseParticle.x = e.clientX - this.canvas.offsetLeft;
        this.mouseParticle.y = e.clientY - this.canvas.offsetTop;
      }.bind(this));

      this.canvas.addEventListener('mouseup', function (e) {
        this.mouseParticle.velocity = {
          x: (Math.random() - 0.5) * this.options.velocity,
          y: (Math.random() - 0.5) * this.options.velocity
        };
        this.mouseParticle = new Particle(this);
        this.mouseParticle.velocity = {
          x: 0,
          y: 0
        };
        this.particles.push(this.mouseParticle);
      }.bind(this));
    }

    // Update canvas
    requestAnimationFrame(this.update.bind(this));
  }
  Particles.prototype.update = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.globalAlpha = 1;

    // Draw particles
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
      this.particles[i].draw();

      // Draw connections
      for (var j = this.particles.length - 1; j > i; j--) {
        var distance = Math.sqrt(
          Math.pow(this.particles[i].x - this.particles[j].x, 2) +
          Math.pow(this.particles[i].y - this.particles[j].y, 2)
        );
        if (distance > 120) {
          continue;
        }

        this.ctx.beginPath();
        this.ctx.strokeStyle = this.options.color;
        this.ctx.globalAlpha = (120 - distance) / 120;
        this.ctx.lineWidth = 0.7;
        this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
        this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
        this.ctx.stroke();
      }
    }

    if (this.options.velocity !== 0) {
      requestAnimationFrame(this.update.bind(this));
    }
  };

  // Helper method to set velocity multiplier
  Particles.prototype.setVelocity = function (speed) {
    if (speed === 'fast') {
      return 1;
    } else if (speed === 'slow') {
      return 0.33;
    } else if (speed === 'none') {
      return 0;
    }
    return 0.66;
  }
  // Helper method to set density multiplier
  Particles.prototype.setDensity = function (density) {
    if (density === 'high') {
      return 5000;
    } else if (density === 'low') {
      return 20000;
    }
    return !isNaN(parseInt(density, 10)) ? density : 10000;
  }
  // Helper method to set multiple styles
  Particles.prototype.setStyles = function (div, styles) {
    for (var property in styles) {
      div.style[property] = styles[property];
    }
  }

  return Particles;

}));

try {
  let options = {
    color: '#111',
    interactive: false,
    speed: 'fast',
    density: 'low'
  };
  let particleCanvas = new Particles(document.getElementById('particles'), options);
} catch (e) {
  // ?
}

//// 3D Effects

function init3DFX(container, inner) {
  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

  //-----------------------------------------

  var counter = 0;
  var updateRate = 10;
  var isTimeToUpdate = function () {
    return counter++ % updateRate === 0;
  };

  //-----------------------------------------

  var onMouseEnterHandler = function (event) {
    update(event);
  };

  var onMouseLeaveHandler = function () {
    inner.style = "";
  };

  var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //-----------------------------------------

  var update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

  var updateTransformStyle = function (x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  //-----------------------------------------

  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;
};

try {
  var containers = document.getElementsByClassName("effects-3dp-container");
  for (const continer of containers) {
    var inner = continer.getElementsByClassName("effects-3dp-inner")[0];

    init3DFX(continer, inner);
  }
} catch (e) {
  // ?
}