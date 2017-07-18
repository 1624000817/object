/**
 * drilldown.js v1.0.0
 * https://github.com/rpetz/DrilldownJS
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Robert Petz
 * https://github.com/rpetz
 */

(function($, window, undefined) {

	//GLOBAL
	var drilldownVersion = "1.0.0",
		drilldownName = "Drilldown.JS",
		$body = $('body'),
		Modernizr = window.Modernizr;

	$.DrilldownJS = function(options, element) {
		this.$el = $(element);
		this._init(options);
	};

	// the options
	$.DrilldownJS.defaults = {
		animationClasses: {
			classin: 'drilldownJS-animate-in-1',
			classout: 'drilldownJS-animate-out-1'
		},
		onLevelClick: function(el, name) {
			return false;
		},
		onLinkClick: function(el, ev) {
			return false;
		},
		backLabel: 'Back',
		useActiveItemAsBackLabel: false,
		rootObjId: 'root',
		debug: false,
		name: '',
		transitionTime: 400
	};

	$.DrilldownJS.prototype = {
		_init: function(options) {
			this.$breadcrumbs = [];
			this.options = $.extend(true, {}, $.DrilldownJS.defaults, options);
			this.$rootObj = {id: this.options.rootObjId, element: this._getTargetById(this.options.rootObjId)};
			this._config();

			var animEndEventNames = {
				'WebkitAnimation': 'webkitAnimationEnd',
				'OAnimation': 'oAnimationEnd',
				'msAnimation': 'MSAnimationEnd',
				'animation': 'animationend'
			},
			transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			};
			
			// animation end event name
			this.animEndEventName = animEndEventNames[Modernizr.prefixed('animation')] + '.drilldownJS';
			
			// transition end event name
			this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.drilldownJS',

			// support for css animations and css transitions
			this.supportAnimations = Modernizr.cssanimations,
			this.supportTransitions = Modernizr.csstransitions;

			this.navigateToRoot();
		},
		_config: function() {
			var back = this.$el.children('[drilldown-usage="back"]');
			var hasBack = back.length > 0;

			var contentDiv = '<div drilldown-usage="drilldown-content" class="drilldown-content"></div>';

			if (hasBack)
				back.after(contentDiv);
			else
				this.$el.prepend(contentDiv);

			this.$container = this.$el.children('[drilldown-usage="drilldown-content"]');
		},
		closeMenu: function() {
			if (this.open) {
				this._closeMenu();
			}
		},
		openMenu: function() {
			if (!this.open) {
				this._openMenu();
			}
		},
		navigateToTarget: function (id) {
			this._navigateToTarget(id);
		},
		navigateToRoot: function () {
			this._navigateToTarget(this.$rootObj);
		},
		navigateBackOneLevel: function () {
			this._navigateBackOneLevel();
		},
		_closeMenu: function() {
			//TODO: Close the menu
		},
		_openMenu: function() {
			//TODO: Open the menu
		},
		_handleClickEvent: function (event) {
			event.stopPropagation();
			var id = $(this).attr('drilldown-target');
			var isBackwards = $(this).attr('drilldown-backwards') != null;
			var hasBackwardsTarget = id != null;
			var self = event.data.self;

			if(isBackwards && !hasBackwardsTarget)
				self._navigateBackOneLevel();
			else
				self._navigateToTarget({id: id, element: self._getTargetById(id)}, isBackwards);
		},
		_navigateBackOneLevel: function () {
			if (this.$breadcrumbs.length > 1)
				this._navigateToTarget(this.$breadcrumbs.pop().id, true);
		},
		_navigateToTarget: function(target, isGoingBack) {
			if (isGoingBack == null) isGoingBack = false;

			var scope = this,
				sourceId = scope._getCurrentId(),
				sourceExists = sourceId != null && scope._checkIfTargetExists(sourceId.id),
				targetExists = scope._checkIfTargetExists(target.id),
				sourceElement,
				targetElement,
				sourceElementParent,
				contentElement = scope.$container;

			//If we are navigating to the current element or null, do nothing
			if (target == null || target == scope._getCurrentId())
				return;

			//If the target does not exist, throw an error
			if (!targetExists) {
				scope._logErrorMessage('Attempted to drill into an drilldown object with ID: ' + target.id + ' - But no drilldown object exists with that ID.');
				return;
			}

			scope.$currentId = target;
			targetElement = scope._getTargetById(target.id);
			//TODO: Bind touch events
			targetElement.children('.drilldown-link').bind('click.drilldown', {self: scope}, scope._handleClickEvent);
			targetElement.appendTo(contentElement);

			if (sourceExists) {
				sourceElement = scope._getTargetById(sourceId.id);
				//TODO: Unbind touch events
				sourceElement.children('.drilldown-link').unbind('click.drilldown', scope._handleClickEvent);
				sourceElementParent = sourceElement.attr('drilldown-parent');
				scope._logDebugMessage('Navigating to ' + target.id + ' from ' + sourceId.id);

				if (!isGoingBack) {
					scope.$breadcrumbs.push({id: sourceId, element: sourceElement});
				}
			} else {
				scope._logDebugMessage('Navigating to ' + target.id);

				if (!isGoingBack) {
					scope.$breadcrumbs.push(scope.$rootObj);
				}
			}

			scope._animateBetweenElements(sourceElement, targetElement, sourceExists, isGoingBack, function () {
				if (sourceExists) {
					if (sourceId.id == scope.$rootObj.id)
						scope.$container.after(sourceElement);
					else {
						var parent = scope.$el.find('[drilldown-id="' + sourceElementParent + '"]');
						sourceElement.appendTo(parent);
					}
				}
			});
		},
		_animateBetweenElements: function (sourceElement, targetElement, sourceExists, goBackwards, callback) {
			if (goBackwards == null) goBackwards = false;
			if (sourceExists == null) sourceExists = false;

			var scope = this,
				width = sourceExists ? sourceElement.width() : null,
				height = targetElement.height(),
				animation = goBackwards ? { left: '+=' + width } : { left: '-=' + width },
				animationTime = scope.options.transitionTime,
				parentsWithDisplayNone = targetElement.parents().filter(function() { return $(this).css('display') == 'none'; }),
				sourceAnimated = !sourceExists,
				targetAnimated = false,
				animationCallback = function () {
					if (sourceAnimated && targetAnimated)
						callback();
				};

			if (parentsWithDisplayNone.length > 0) {
				parentsWithDisplayNone.css('display','block');
				height = targetElement.height();
				parentsWithDisplayNone.css('display','');
			}

			scope.$el.animate({ height: height }, animationTime)

			if (sourceExists) {
				sourceElement.animate(animation, animationTime, null, function () {
					sourceElement.removeClass('drilldown-current');
					sourceAnimated = true;
					animationCallback();
				})
				if (goBackwards)
					targetElement.addClass('drilldown-current').css('left', -width).animate(animation, animationTime, function () {
						targetAnimated = true;
						animationCallback();
					});
				else
					targetElement.addClass('drilldown-current').css('left', width).animate(animation, animationTime, function () {
						targetAnimated = true;
						animationCallback();
					});
			}
			else {
				targetElement.addClass('drilldown-current');
				sourceAnimated = true;
				targetAnimated = true;
				animationCallback();
			}
		},
		_getCurrentId: function () {
			return this.$currentId;
		},
		_checkIfTargetExists: function (id) {
			if (id == this.$rootObj.id) return true;
			return this.$el.find('[drilldown-id="' + id + '"]').length > 0;
		},
		_getTargetById: function (id) {
			if (this.$rootObj != null && id == this.$rootObj.id) return this.$rootObj.element;
			return this.$el.find('[drilldown-id="' + id + '"]');
		},
		_logDebugMessage: function (message) {
			if (this.options.debug) {
				if (this.options.name != null && this.options.name.length > 0)
					window.console.log('DrilldownJS - ' + this.options.name + ': ' + message);
				else
					window.console.log('DrilldownJS: ' + message);
			}
		},
		_logErrorMessage: function (message) {
			if (window.console) {
				if (this.options.name != null && this.options.name.length > 0)
					window.console.error('DrilldownJS - ' + this.options.name + ': ' + message);
				else
					window.console.error('DrilldownJS: ' + message);
			}
		}
	};

	var logError = function(message) {
		if (window.console) {
			window.console.error(message);
		}
	};

	$.fn.DrilldownJS = function(options) {
		var instance;

		if (typeof options === 'string') {
			var args = Array.prototype.slice.call(arguments, 1);
			this.each(function() {
				instance = $.data(this, 'drilldown');
				if (!instance) {
					logError("Cannot call methods on DrilldownJS prior to initialization; " +
						"attempted to call method '" + options + "'");
					return;
				}
				if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
					logError("No such method '" + options + "' for DrilldownJS instance");
					return;
				}
				instance[options].apply(instance, args);
			});
		} else {
			this.each(function() {
				instance = $.data(this, 'drilldown');
				if (instance) {
					instance._init();
				} else {
					instance = $.data(this, 'drilldown', new $.DrilldownJS(options, this));
				}
			});
		}

		if (instance != null) {
			this.navigateToTarget = function (targetID) {
				instance.navigateToTarget({id: targetID, element: instance._getTargetById(targetID)});
			}

			this.navigateBackOneLevel = function () {
				instance.navigateBackOneLevel();
			}
		}
		return this;
	};

})(jQuery, window);