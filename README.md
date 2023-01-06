# Tablifier

## What is it?
Tablifier is a small JavaScript utility you can import into any blog post or web page and, with almost zero effort, create automated generators from plaintext lists. It should play nice with markdown, Blogger, Wordpress, and basically anything else that spits out HTML-formatted lists. You can stick this into any existing post with a numbered or bulleted list and have a functional automated table in seconds.

Tablifier is designed to run in any HTML document and from virtually any part of that document. Its script is entirely self-contained JavaScript with no external dependencies. It is intended to be computationally light, portable, and offline-friendly. It is also meant to minimize as much as possible the necessity of any code manipulation.

Tablifier is available to use, copy, modify, etc. with attribution under the MIT License. Have fun with it.

## Disclaimer
I am not a computer scientist. I have no formal training in HTML or JavaScript. I write code as a hobby and am entirely self-taught. I try to do basic stability testing and make sure not to write my code in ways that can permanently affect your system or content. I have done my best to make this basically functional, friendly, and easy to use. If you encounter any bugs, please let me know via the Tablifier github page.

## Installation
The following instructions are written with users with absolutely no prior knowledge of HTML in mind. More advanced users will probably find The Short Version sufficient.

How you install Tablifier will depend on your publishing system and level of comfort manipulating HTML. Regardless, each implementation involves the same basic steps:

### The Short Version
1. Pick a version and download or copy/paste the script.
2. Insert the script in your page or post's HTML.
3. Apply the `random-table` class to the list(s) you want to automate or enclose them in `<tablify>` tags.

### Step 1: Obtain a copy
The script of Tablifier is available at github.com/todistantlands/tablifier. There are two versions of Tablifier. Both versions are fundamentally non-destructive and do not pose any significant risk to use; choose the one that best suits your publishing environment:

- *Tablifier Lite* is intended for users comfortable with basic HTML manipulation. It is slightly more compact than Plaintext but requires the use inline HTML or CSS tagging. 
- *Tablifier Plaintext* minimizes the need for HTML manipulation, allowing users to invoke it in plaintext. It is slightly clunkier on the backend than Lite and more likely to encounter errors.

Whichever version you choose, download or copy the corresponding script from the repository.

### Step 2: Insert Script
Again, your preferred insert method will depend on your publishing environment, as well as your intended use-case:

#### Dead Simple Method
This option should be sufficient for most users. Open the post or webpage you wish to import Tablifier into. Somewhere inside the page -- basically anywhere, really -- insert the following code:

```
<script>
// COPY/PASTE THE CONTENTS OF THE SCRIPT HERE
</script>
```

Instructions for accessing the HTML editor on major blogging platforms:
- [Editing HTML in Wordpress](https://wordpress.com/support/editors/#edit-html-in-the-word-press-editor)
- [Editing HTML in Blogger](https://support.google.com/blogger/thread/50045059/how-can-i-edit-as-html-in-the-new-blogger-interface?hl=en)
	
If using one of these editors, the safest place to import the script is at the very bottom of the post.

#### Script Import
Users with file system access can upload their desired Tablifier version and insert it into pages or posts as needed using a `<script src>` tag. (Eg. `<script src="/tablifier-lite.js">`.)

#### Site-Wide Import
If your publishing environment lets you edit the site's HTML header or footer, inserting the script in one of those elements is a simple and convenient way to run it site-wide. This might cause some slight slowdown loading text-heavy pages on less powerful devices. This option is not recommended for use with Tablifier Plaintext.

### Step 3: Mark Lists for Automation

Tablifier needs to be told which lists to create generators for. How you do this depends on what version of Tablifier you are using. Note that each list needs to be tagged separately. Enclosing multiple lists in the same tag will cause Tablifier to treat them as a single, nested list.

#### Lite
Tablifier Lite can identify Tablifier lists by two methods:

1. **Class properties:** Tablifier will work on any list (`<ul>` or `<ol>`) or `div` tag with the property `class="random-table"`. Eg. `<ul class="random-table">list goes here</ul>`. Some Markdown implementations, like [kramdown](https://kramdown.gettalong.org/), support class application through inline tags. The class need only be applied to the highest-level table. [See this post for further instructions on applying class properties](https://todistantlands.github.io/2022/12/26/tablifier.html).
2. **Tablify tags:** You can nest each list you wish to automate in `<tablify>` tags. This option may be preferable for Markdown users who can't easily modify their content's class tags.

#### Plaintext
In addition to the options above, Tablifier Plaintext allows you to enclose your table in `<tablify>` tags *directly in the text editor* (eg. Blogger's composition interface). Essentially, it offers the same functionality as Lite's "Tablify tags" method *even for users not using Markdown*. In your editor, that would look like this:

```
<tablify>
- Item A
- Item B
	- Sub-item i
	- Sub-item ii
	- Sub-item iii
- Item C
</tablify>
```

## Roadmap and Planned Features
Tablifier is a free tool created by a hobbyist for hobbyists. It does not follow any specific production plan or schedule. Nevertheless, the author currently intends to provide the following:

- More detailed documentation on Tablifier's features and functionality.
- Finer-grained control over various functions, including:
	- The pseudocode tags used to designate lists in Plaintext.
	- The location and text labels for "pull" buttons.
- Cross-list pulls (i.e. lists that pull entries from other lists).
- Support for weighted lists and custom rolling algorithms using standard RPG dice notation (eg. 2d6).

Features and fixes can be requested via the Tablifier github page.

## License
MIT License

Copyright (c) 2023 Alex Chalk / todistantlands

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
