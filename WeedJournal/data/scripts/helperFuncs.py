
def create_user(db, user):
  users = db.Users
  return users.insert_one(user)

def get_user(db, username):
  users = db.Users
  return users.find_one({"username": username}) 

def get_users(db):
    users = db.Users
    return users.find()

def get_users_header(db):
  users = db.Users
  return  users.find({}, {"_id": 0,"username": 1, "fName": 1, "lName": 1})

def update_user_username(db, username, update):
  users = db.Users
  return users.update_one({"username": username}, {'$set': {"username": update}})

def update_user_fname(db, fname, update):
  users = db.Users
  return users.update_one({"fName": fname}, {'$set': {"fName" : update}})

def update_user_lname(db, lname, update):
  users = db.Users
  return users.update_one({"lName": lname}, {'$set': {"lName" : update}})

def update_user_bio(db, bio, update):
  users = db.Users
  return users.update_one({"bio": bio}, {'$set': {"bio" : update}})


def delete_user(db, username):
  users = db.Users
  return users.delete_one({"username": username})


# Flowers collection

def create_flower(db, flower):
  flowers = db.Flower
  return flowers.insert_one(flower)

def get_flower(db, name):
  flowers = db.Flower
  return flowers.find_one({"name": name})

def update_flower_name(db, name, update):
  flowers = db.Flower 
  return flowers.update_one({"name": name}, {'$set': update})

def delete_flower(db, name):
  flowers = db.Flower
  return flowers.delete_one({"name": name})

