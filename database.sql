CREATE TABLE "programs" (
    "id" serial primary key,
    "program_name" varchar(100)
); 
CREATE TABLE "categories" (
    "id" serial primary key,
    "category_name" varchar (100)
);
CREATE TABLE "resources" (
    "id" serial primary key, 
    "name" varchar(100),
    "url" varchar(500),
    "description" varchar (2000),
    "image_url" varchar(400), 
    "category_id" int references "categories" (id), 
    "program_id" int references "programs" (id)
);
CREATE TABLE "keywords" (
    "id" serial primary key,
    "keyword" varchar(100),
    "resource_id" int references "resources" (id)
);
CREATE TABLE "updates" (
    "id" serial primary key,
    "author" varchar (250),
    "program_id" int references "programs" (id),
    "update_text" varchar
);
CREATE TABLE "update_images" (
    "id" serial primary key, 
    "image_url" varchar (500),
    "update_id" int references "updates" (id)
);