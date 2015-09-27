if (Meteor.isClient) {


  Template.post_title.helpers({

    "isPostPage": function () {
      if (Router.current().params._id) {
        return true;
      } else {
        return false;
      }
    }

  });

  Template.post_thumbnail.helpers({

    "isPostPage": function () {
      if (Router.current().params._id) {
        return true;
      } else {
        return false;
      }
    }

  });


  Telescope.modules.remove("postHeading", "post_domain");

  Telescope.modules.add("postMeta", {
    template: "post_domain",
    order: 2
  });

  Telescope.modules.remove("postHeading", "post_categories");

  Telescope.modules.add("postMeta", {
    template: "post_categories",
    order: 1
  });

  $(window).scroll(function (e) {
    $("body").css({"background-position": $("body").scrollTop()/12 + "% center"})
  });


}
