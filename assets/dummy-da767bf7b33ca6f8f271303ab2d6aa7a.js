"use strict";define("dummy/adapters/application",["exports","ember-data","ember-data-url-templates"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.JSONAPIAdapter.extend(n.default)}),define("dummy/adapters/comment",["exports","dummy/adapters/application"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({namespace:"api",urlTemplate:"{/namespace}/posts/{postId}/comments{/id}"})}),define("dummy/adapters/post",["exports","dummy/adapters/application"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({urlTemplate:"{+host}{/namespace}/my-posts",queryRecordUrlTemplate:"{+host}{/namespace}/my-posts/{slug}",updateRecordUrlTemplate:"{+host}{/namespace}/my-posts/{slug}",namespace:"api"})}),define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,o,a){Object.defineProperty(e,"__esModule",{value:!0});var i=void 0;i=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,o.default)(i,a.default.modulePrefix),e.default=i}),define("dummy/components/docs-hero",["exports","ember-cli-addon-docs/components/docs-hero/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/docs-logo",["exports","ember-cli-addon-docs/components/docs-logo/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/docs-navbar",["exports","ember-cli-addon-docs/components/docs-navbar/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/docs-viewer",["exports","ember-cli-addon-docs/components/docs-viewer/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/docs-viewer/x-main",["exports","ember-cli-addon-docs/components/docs-viewer/x-main/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/docs-viewer/x-nav-item",["exports","ember-cli-addon-docs/components/docs-viewer/x-nav-item/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/docs-viewer/x-nav-list",["exports","ember-cli-addon-docs/components/docs-viewer/x-nav-list/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/docs-viewer/x-nav",["exports","ember-cli-addon-docs/components/docs-viewer/x-nav/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/sample-component",["exports","ember-cli-addon-docs/components/sample-component/component"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/post",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0});var n=t.default.computed;e.default=t.default.Controller.extend({post:n.readOnly("model"),actions:{publishPost:function(e){e.set("isPublished",!0),e.save()}}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/initializers/component-styles",["exports","ember","ember-component-css/pod-names","dummy/mixins/style-namespacing-extras"],function(e,t,n,o){function a(){}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a;var i=t.default.Component,s=t.default.ComponentLookup,r=t.default.computed,l=t.default.getOwner;s.reopen({componentFor:function(e,t){return t=t.hasRegistration?t:l(this),n.default[e]&&!t.hasRegistration("component:"+e)&&t.register("component:"+e,i),this._super.apply(this,arguments)}}),i.reopen(o.default,{componentCssClassName:r({get:function(){return n.default[this.get("_componentIdentifier")]||""}}),init:function(){this._super.apply(this,arguments),this.get("_shouldAddNamespacedClassName")&&(this.classNames=this.classNames.concat(this.get("componentCssClassName")))}}),e.default={name:"component-styles",initialize:a}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("dummy/initializers/ember-cli-mirage",["exports","ember","ember-cli-mirage/utils/read-modules","dummy/config/environment","dummy/mirage/config","ember-cli-mirage/server","lodash/assign"],function(e,t,n,o,a,i,s){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.default,t=e.environment,r=u(e["ember-cli-mirage"]||{},"discoverEmberDataModels",!0),l=(0,n.default)(e.modulePrefix),d=(0,s.default)(l,{environment:t,baseConfig:a.default,testConfig:a.testConfig,discoverEmberDataModels:r});return new i.default(d)}function l(e,t){var n=void 0!==t.enabled,o=d(e,t);return n?t.enabled:o}function d(e,t){var n="development"===e&&!t.usingProxy,o="test"===e;return n||o}Object.defineProperty(e,"__esModule",{value:!0}),e.startMirage=r;var u=t.default.getWithDefault;e.default={name:"ember-cli-mirage",initialize:function(e){if(arguments.length>1){arguments[0],arguments[1]}l(o.default.environment,o.default["ember-cli-mirage"])&&r(o.default)}}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/index"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function o(){var e=arguments[1]||arguments[0];if(!1!==n.default.exportApplicationGlobal){var o;if("undefined"!=typeof window)o=window;else if("undefined"!=typeof global)o=global;else{if("undefined"==typeof self)return;o=self}var a,i=n.default.exportApplicationGlobal;a="string"==typeof i?i:t.default.String.classify(n.default.modulePrefix),o[a]||(o[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=o,e.default={name:"export-application-global",initialize:o}}),define("dummy/initializers/injectStore",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("dummy/initializers/store",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("dummy/initializers/transforms",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("dummy/mirage/config",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){this.get("/api/my-posts","post"),this.get("/api/my-posts/:slug",function(e,t){return e.posts.findBy({slug:t.params.slug})}),this.patch("/api/my-posts/:slug",function(e,t){return e.posts.findBy({slug:t.params.slug})}),this.get("/api/posts/:post_id/comments/:id")}}),define("dummy/mirage/factories/comment",["exports","ember-cli-mirage"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.Factory.extend({message:function(){return t.faker.lorem.sentence()}})}),define("dummy/mirage/factories/post",["exports","ember-cli-mirage"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.Factory.extend({slug:function(){return t.faker.helpers.slugify(this.title)},title:function(e){return"Post #"+e+": "+t.faker.lorem.words()}})}),define("dummy/mirage/models/comment",["exports","ember-cli-mirage"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.Model.extend({post:(0,t.belongsTo)()})}),define("dummy/mirage/models/post",["exports","ember-cli-mirage"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.Model.extend({comments:(0,t.hasMany)()})}),define("dummy/mirage/scenarios/default",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){e.createList("post",10)}}),define("dummy/mirage/serializers/application",["exports","ember-cli-mirage"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.JSONAPISerializer.extend({})}),define("dummy/mixins/style-namespacing-extras",["exports","ember-component-css/mixins/style-namespacing-extras"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/models/comment",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0});var n=t.default.attr,o=t.default.belongsTo;e.default=t.default.Model.extend({post:o(),message:n("string")})}),define("dummy/models/post",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0});var n=t.default.attr,o=t.default.hasMany;e.default=t.default.Model.extend({slug:n("string"),title:n("string"),isPublished:n("boolean"),comments:o()})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0});var o=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});o.map(function(){this.route("docs",function(){this.route("quickstart"),this.route("patterns"),this.route("cookbook",function(){this.route("queries"),this.route("relationships")})}),this.route("posts"),this.route("post",{path:"/posts/:slug"})}),e.default=o}),define("dummy/routes/application",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Route.extend({})}),define("dummy/routes/post",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Route.extend({model:function(e){return this.store.queryRecord("post",{slug:e.slug})}})}),define("dummy/routes/posts",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Route.extend({model:function(){return this.store.findAll("post")}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"6ec6LQ7V",block:'{"statements":[[1,[33,["docs-navbar"],null,[["logo","name","githubUrl"],["ember","Data Url Templates","https://github.com/amiel/ember-data-url-templates"]]],false],[0,"\\n\\n"],[1,[26,["outlet"]],false],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/docs",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"LQHbYrjq",block:'{"statements":[[6,["docs-viewer"],null,null,{"statements":[[0,"\\n"],[6,["component"],[[28,["viewer","nav"]]],null,{"statements":[[0,"    "],[1,[33,["component"],[[28,["nav","item"]],"Home","docs.index"],null],false],[0,"\\n    "],[1,[33,["component"],[[28,["nav","item"]],"Quickstart","docs.quickstart"],null],false],[0,"\\n    "],[1,[33,["component"],[[28,["nav","item"]],"Patterns","docs.patterns"],null],false],[0,"\\n\\n"],[6,["component"],[[28,["nav","subnav"]]],null,{"statements":[[0,"      "],[1,[33,["component"],[[28,["nav","item"]],"query and queryRecord","docs.cookbook.queries"],null],false],[0,"\\n      "],[1,[33,["component"],[[28,["nav","item"]],"relationships","docs.cookbook.relationships"],null],false],[0,"\\n"]],"locals":["nav"]},null],[0,"\\n    "],[4," {{nav.item \'API Reference\' \'docs.api\'}} "],[0,"\\n"]],"locals":["nav"]},null],[0,"\\n"],[6,["component"],[[28,["viewer","main"]]],null,{"statements":[[0,"    "],[11,"div",[]],[15,"class","docs-container docs__center docs-md"],[13],[0,"\\n      "],[11,"div",[]],[15,"class","docs-section"],[13],[0,"\\n        "],[1,[26,["outlet"]],false],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n"]],"locals":[]},null],[0,"\\n"]],"locals":["viewer"]},null]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/docs.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"vmsNtZBG",block:'{"statements":[[1,[33,["docs-hero"],null,[["logo","slim-heading","strong-heading","byline"],["ember","Data","Url Templates","build urls with templates instead of defining buildURL"]]],false],[0,"\\n\\n\\n"],[11,"div",[]],[15,"class","docs-container docs-md"],[13],[0,"\\n  "],[11,"section",[]],[15,"class","docs-section"],[13],[0,"\\n\\n    "],[11,"aside",[]],[13],[0,"Looking for the quickstart? "],[6,["link-to"],["docs.quickstart"],null,{"statements":[[0,"Click here"]],"locals":[]},null],[0,"."],[14],[0,"\\n\\n    "],[11,"p",[]],[13],[0,"\\n      ember-data-url-templates is an addon to allow building urls with url templates instead of defining "],[11,"code",[]],[13],[0,"buildURL"],[14],[0," as described in "],[11,"a",[]],[15,"href","https://github.com/emberjs/rfcs/pull/4"],[15,"target","_blank"],[15,"rel","noopener"],[13],[0,"emberjs/rfcs#4"],[14],[0,".\\n    "],[14],[0,"\\n\\n    "],[11,"pre",[]],[13],[0,"\\n      "],[11,"code",[]],[13],[0,"\\n        // app/adapters/comment.js\\n\\n        import Ember from \\"ember\\";\\n        import DS from \\"ember-data\\";\\n        import UrlTemplates from \\"ember-data-url-templates\\";\\n\\n        export default DS.RESTAdapter.extend(UrlTemplates, {\\n          urlTemplate: \'{+host}/comments{/id}\',\\n          queryUrlTemplate: \'{+host}/comments{?query*}\',\\n          createRecordUrlTemplate: \'{+host}/users/{userId}/comments\',\\n\\n          session: Ember.inject.service(),\\n\\n          urlSegments: {\\n            userId() {\\n              return this.get(\'session.userId\');\\n            }\\n          }\\n        });\\n      "],[14],[0,"\\n    "],[14],[0,"\\n\\n  "],[14],[0,"\\n"],[14],[0,"\\n\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/templates/post",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"WuZmfeG+",block:'{"statements":[[11,"div",[]],[16,"id",[34,["post-",[28,["post","id"]]]]],[15,"class","post"],[13],[0,"\\n  "],[11,"h2",[]],[13],[1,[28,["post","title"]],false],[14],[0,"\\n\\n"],[6,["unless"],[[28,["post","isPublished"]]],null,{"statements":[[0,"    "],[11,"a",[]],[15,"id","publish-post"],[5,["action"],[[28,[null]],"publishPost",[28,["post"]]]],[13],[0,"Publish Post"],[14],[0,"\\n"]],"locals":[]},null],[0,"\\n  "],[11,"h3",[]],[13],[0,"Comments"],[14],[0,"\\n\\n  "],[11,"div",[]],[15,"id","comments"],[13],[0,"\\n"],[6,["each"],[[28,["post","comments"]]],null,{"statements":[[0,"      "],[11,"p",[]],[13],[1,[28,["comment","message"]],false],[14],[0,"\\n"]],"locals":["comment"]},null],[0,"  "],[14],[0,"\\n"],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/post.hbs"}})}),define("dummy/templates/posts",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"tVP8MMUT",block:'{"statements":[[11,"h1",[]],[13],[0,"Posts"],[14],[0,"\\n\\n"],[11,"div",[]],[15,"id","posts"],[13],[0,"\\n"],[6,["each"],[[28,["model"]]],null,{"statements":[[0,"    "],[11,"div",[]],[16,"id",[34,["post-",[28,["post","id"]]]]],[15,"class","post"],[13],[0,"\\n      "],[6,["link-to"],["post",[28,["post","slug"]]],null,{"statements":[[1,[28,["post","title"]],false]],"locals":[]},null],[0,"\\n    "],[14],[0,"\\n"]],"locals":["post"]},null],[14],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/posts.hbs"}})}),define("dummy/config/environment",["ember"],function(e){try{var t="dummy/config/environment",n=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),o=JSON.parse(unescape(n)),a={default:o};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app").default.create({});