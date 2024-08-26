import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#users/database/models/user'
import BlogPost from '#blog/database/models/blog_post'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    /**
     * Create users.
     */
    const users = await User.createMany([
      {
        seeded: true,

        fullName: 'Jane Doe',
        email: 'jane@example.com',
        password: 'password123',
        role: 'admin',
        stripeCustomerId: 'cus_123456',
      },
      {
        seeded: true,

        fullName: 'John Smith',
        email: 'john@example.com',
        password: 'password456',
        role: 'customer',
        stripeCustomerId: 'cus_789012',
      },
      {
        seeded: true,

        fullName: 'Alice Johnson',
        email: 'alice@example.com',
        password: 'password789',
        role: 'customer',
        stripeCustomerId: 'cus_345678',
      },
    ])

    /**
     * Create blog posts.
     */
    await BlogPost.createMany([
      {
        title: 'Getting Started with AdonisJS',
        shortDescription: 'Learn the basics of AdonisJS framework',
        content: `# Getting Started with AdonisJS

AdonisJS is a Node.js web framework that provides a robust set of tools for building web applications. In this article, we'll cover the basics of setting up an AdonisJS project and creating your first route.

## Installation

To get started, you'll need to have Node.js installed on your machine. Then, you can create a new AdonisJS project using the following command:

\`\`\`
npm init adonis-ts-app@latest my-app
\`\`\`

## Creating Your First Route

Once your project is set up, you can create your first route in the \`start/routes.ts\` file:

\`\`\`typescript
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
\`\`\`

This creates a simple route that returns a JSON object when you visit the root URL of your application.

Stay tuned for more in-depth tutorials on AdonisJS!`,
        authorId: users[0].id,
        tags: 'adonis,nodejs,webdev',
        publishedAt: DateTime.now().minus({ days: 5 }),
      },
      {
        title: 'Mastering Lucid ORM',
        shortDescription: 'Deep dive into Lucid ORM features',
        content: `# Mastering Lucid ORM in AdonisJS

Lucid is the ORM (Object-Relational Mapping) used in AdonisJS. It provides an elegant way to interact with your database. Let's explore some of its key features.

## Defining Models

To define a model, create a new file in the \`app/Models\` directory:

\`\`\`typescript
import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
\`\`\`

## Querying Data

Lucid provides a fluent interface for querying your database:

\`\`\`typescript
const users = await User.query().where('active', true).orderBy('created_at', 'desc')
\`\`\`

This is just scratching the surface of what Lucid can do. In future articles, we'll explore relationships, hooks, and more!`,
        authorId: users[1].id,
        tags: 'adonis,orm,database',
        publishedAt: DateTime.now().minus({ days: 2 }),
      },
      {
        title: 'Building RESTful APIs with AdonisJS',
        shortDescription: 'Learn how to create robust APIs using AdonisJS',
        content: `# Building RESTful APIs with AdonisJS

AdonisJS provides a powerful set of tools for building RESTful APIs. In this article, we'll walk through the process of creating a simple API.

## Setting Up Routes

First, let's set up our routes in \`start/routes.ts\`:

\`\`\`typescript
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('posts', 'PostsController.index')
  Route.post('posts', 'PostsController.store')
  Route.get('posts/:id', 'PostsController.show')
  Route.put('posts/:id', 'PostsController.update')
  Route.delete('posts/:id', 'PostsController.destroy')
}).prefix('api')
\`\`\`

## Creating a Controller

Next, let's create a controller to handle these routes:

\`\`\`typescript
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({ response }: HttpContextContract) {
    const posts = await Post.all()
    return response.json(posts)
  }

  // Implement other methods (store, show, update, destroy) here
}
\`\`\`

This is a basic setup for a RESTful API in AdonisJS. In future articles, we'll cover authentication, validation, and more advanced API features.`,
        authorId: users[2].id,
        tags: 'adonis,api,rest',
        publishedAt: DateTime.now().minus({ hours: 12 }),
      },
    ])
  }
}
