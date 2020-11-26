class Template {
  constructor (name = 'Template Name', height = 8.8, width = 6.3) {
    this.name = name
    this.height = height
    this.width = width
  }

  add () {
    return { name: this.name, height: this.height, width: this.width }
  }
}

export default Template
