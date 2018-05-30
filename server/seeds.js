var productSeeds = [];

if(Products.find().count() === 0){
  _.each(productSeeds, function(product){
    Products.insert(product);
    console.log("Inserted ", product.sku);
  })
}

if(Meteor.users.find().count() === 0){
  var id = Accounts.createUser({
    username : "admin",
    email: "thearhmovement@gmail.com",
    password: "ashovav",
    profile: { name: "Root" },
    roles : []
  });

  Roles.addUsersToRoles(id, ["Administrator"]);
  console.log("Added Admin user...");
}

if(Vendors.find().count() === 0){
  var vendors = [];

  _.each(vendors, function(vendor){
    Vendors.insert(vendor);
    console.log("Added ", vendor.name);
  });
}