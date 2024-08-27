import AdminLayout from '#common/ui/components/admin_layout'
import Label from '#common/ui/components/label'
import Input from '#common/ui/components/input'
import Button from '#common/ui/components/button'
import Error from '#common/ui/components/error'
import Link from '#common/ui/components/link'
import * as React from 'react'
import { useForm } from '@inertiajs/react'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { EditorState } from 'lexical'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'

const editorConfig = {
  namespace: 'editor',
  theme: {
    // Define your theme here
  },
  onError(error: Error) {
    console.error(error)
  },
}

export default function WriteBlogPostPage() {
  const form = useForm({
    title: '',
    shortDescription: '',
    content: '',
    thumbnail: '',
    tags: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    form.post('/admin/blog/create')
  }

  const onChange = (editorState: EditorState) => {
    editorState.read(() => {
      const content = editorState.toJSON()
      form.setData('content', JSON.stringify(content))
    })
  }

  return (
    <AdminLayout>
      <Link href="/admin/blog">Blog Management</Link>
      <h2 className="text-xl sm:text-2xl font-semibold">Write new blog post</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Title field */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            className="w-full"
            id="title"
            name="title"
            type="text"
            placeholder="Enter the title"
            required
            value={form.data.title}
            onChange={(e) => form.setData('title', e.target.value)}
          />
          <Error errorKey="title" />
        </div>

        {/* Short Description field */}
        <div>
          <Label htmlFor="shortDescription">Short Description</Label>
          <Input
            className="w-full"
            id="shortDescription"
            name="shortDescription"
            type="text"
            placeholder="Enter a short description"
            required
            value={form.data.shortDescription}
            onChange={(e) => form.setData('shortDescription', e.target.value)}
          />
          <Error errorKey="shortDescription" />
        </div>

        {/* Content field */}
        <div>
          <Label htmlFor="content">Content</Label>
          <LexicalComposer initialConfig={editorConfig}>
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={<div className="editor-placeholder">Enter content...</div>}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <OnChangePlugin onChange={onChange} />
          </LexicalComposer>
          <Error errorKey="content" />
        </div>

        {/* Thumbnail field */}
        <div>
          <Label htmlFor="thumbnail">Thumbnail URL</Label>
          <Input
            className="w-full"
            id="thumbnail"
            name="thumbnail"
            type="text"
            placeholder="Enter the thumbnail URL"
            value={form.data.thumbnail}
            onChange={(e) => form.setData('thumbnail', e.target.value)}
          />
          <Error errorKey="thumbnail" />
        </div>

        {/* Tags field */}
        <div>
          <Label htmlFor="tags">Tags</Label>
          <Input
            className="w-full"
            id="tags"
            name="tags"
            type="text"
            placeholder="Enter tags separated by commas"
            value={form.data.tags}
            onChange={(e) => form.setData('tags', e.target.value)}
          />
          <Error errorKey="tags" />
        </div>

        <Button className="w-full" type="submit" loading={form.processing}>
          Publish
        </Button>
      </form>
    </AdminLayout>
  )
}
