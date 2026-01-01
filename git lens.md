GitLens — Supercharge Git in VS Code
Supercharge Git and unlock untapped knowledge within your repo to better understand, write, and review code. Focus, collaborate, accelerate.

GitLens is a powerful open-source extension for Visual Studio Code built and maintained by GitKraken.

Enhance your workflows with powerful Git functionality like in-editor blame annotations, hovers, CodeLens, and more—all fully customizable within VS Code. Try GitLens Pro's advanced workflows that accelerate PR reviews, provide rich interactive Git actions, and enhance collaboration for you and your team.

Getting Started
Install GitLens by clicking Install on the banner above, or from the Extensions side bar in VS Code by searching for GitLens.

Watch the GitLens Getting Started video

Use Switch to Pre-Release Version on the extension banner to be the first to experience new features.
Have questions or concerns? Talk to our engineering team directly through our GitHub Discussions page. Having a positive experience with GitLens? Feel free to write a review.

GitLens Editions: Community and Pro
GitLens Community is free and gives you powerful tools to manage Git and understand how your code has evolved and by whom. With popular features like in-editor blame annotations, hovers, and CodeLens, you can see actionable authorship details at the top of each file. Track the history of any file over time using Revision Navigation to gain deeper insights into code changes.

GitLens Pro takes your workflow to the next level by unlocking advanced features and seamless integrations:

Accelerate PR reviews and easily manage your end-to-end workflows with a clean and actionable PR, issue, and branch Home View built directly into VS Code.
Manage commits effortlessly using the Commit Graph, where you can execute advanced actions like rebase, merge, and more. With powerful search and filtering, quickly locate commits, branches, or files.
Enhance collaboration by integrating with platforms like GitHub, GitLab, and Bitbucket, reducing context switching. View and manage PRs directly in VS Code through Launchpad.
You can try GitLens Pro for free by signing up for a GitKraken account. Some Pro features are available for free on public repos. Preview features may require a GitKraken account and could become Pro features in the future.

Workflows | More Features | Labs | Pro | Support and Community | Contributing | Contributors | License

Discover Powerful Workflows
GitLens offers a wide range of features—here are the three most popular workflows that users rely on to boost their productivity:

Interactive Code History — Understanding code in repositories with multiple branches and contributors can be difficult. GitLens provides the context you need with tools like blame, hovers, and file annotations. But it doesn’t stop there—the interactive Commit Graph lets you create branches, rebase, revert, and more, all with powerful search capabilities.

Accelerate PR Reviews — Reduce context switching and manage all your PRs in one place. Prioritize tasks and identify bottlenecks right in VS Code with Launchpad when you integrate Github or other host providers. Work on multiple branches at once without disrupting your main workspace with Worktrees.

Streamline Collaboration — GitLens isn’t just for solo developers—it’s designed to enhance team collaboration. With Cloud Patches and Code Suggest, you can share and discuss suggested changes with any GitLens or GitKraken user, on multiple files and even PRs.

Home View - Your VS Code Workflow Hub
Compact but powerful, the Home View lets you take your tasks and issues from code to merge. Start work on an issue and create PRs in one intelligent view. The perfect companion for developers looking to reduce tedious context switching and stay focused on their work in VS Code.

Accelerate Your Workflow with AI (Preview)
GitLens leverages AI to simplify tedious tasks like writing commit messages, crafting pull request descriptions, generating changelogs and more—allowing you to focus on your code.

Generate Commit and Stash Messages: Quickly create descriptive commit or stash messages tailored to your code changes.

Explain Commits: Instantly understand the context of a commit through concise AI-generated explanations in the Inspect view.

Open Pull Requests: Automatically generate clear PR titles and descriptions directly from your branch changes, speeding up review cycles.

Generate Changelogs: Effortlessly summarize repository changes for release notes or documentation updates.

More coming soon!

Community Features: Community users can generate commit messages for free if they are using GitHub Copilot or have a free GitKraken account with an API key connected to other providers like OpenAI, Anthropic, DeepSeek, Gemini, etc.

Pro Features: Subscribe to GitLens Pro to access all AI features with GitKraken AI—no manual key management required.

Interactive Code History
Understanding who made changes, when, and why can be challenging. GitLens simplifies this with tools like the Commit Graph, Inspect, Inline Blame, and Hovers, giving you clear context and insights. Quickly explore your repository's history with intuitive visuals and actionable tools.

Blame, CodeLens, and Hovers
Gain a deeper understanding of how code changed and by whom through in-editor code annotations and rich hovers.

Inline and Status Bar Blame
Provides historical context about line changes through unobtrusive blame annotation at the end of the current line and on the status bar.

Inline Line Blame
Inline blame annotations
Status Bar Blame
Status bar blame annotations
💡 Use the Toggle Line Blame and Toggle Git CodeLens commands from the Command Palette to turn the annotations on and off.

Git CodeLens
Adds contextual and actionable authorship information at the top of each file and at the beginning of each block of code.

Recent Change — author and date of the most recent commit for the file or code block
Authors — number of authors of the file or code block and the most prominent author (if there is more than one)
Rich Hovers
Hover over blame annotations to reveal rich details and actions.

Current Line Hovers
File Annotations
Use on-demand whole file annotations to see authorship, recent changes, and a heatmap. Annotations are rendered as visual indicators directly in the editor.

File Blame
File Blame annotations
File Changes
File Changes annotations
File Heatmap
File Heatmap annotations
💡 On an active file, use the Toggle File Blame, Toggle File Changes, and Toggle File Heatmap commands from the Command Palette to turn the annotations on and off.

Commit Graph Pro
Easily visualize your repository and keep track of all work in progress.

Use the rich commit search to find exactly what you're looking for. Its powerful filters allow you to search by a specific commit, message, author, a changed file or files, or even a specific code change. Learn more

Commit Graph
💡Quickly toggle the Graph via the Toggle Commit Graph command.

💡Maximize the Graph via the Toggle Maximized Commit Graph command.

Revision Navigation
With just a click of a button, you can navigate backwards and forwards through the history of any file. Compare changes over time and see the revision history of the whole file or an individual line.

Revision Navigation
Accelerate PR Reviews
PR reviews often require switching between GitHub, email, and your IDE. Launchpad is your centralized PR hub in VS Code where you can spot bottlenecks, prioritize reviews and unblock your team. With Worktrees, you can work on multiple branches—hotfixes, features, or experiments—without disrupting your workspace.

Launchpad Pro
Launchpad consolidates all your GitHub pull requests into a unified, actionable list. Focus on the most important reviews and take action to keep your team moving forward.. Learn more

Launchpad
Worktrees Pro
Worktrees enable efficient multitasking by allowing you to work on multiple branches without stashing changes or leaving your current branch. They preserve your workflow while letting you shift focus when needed. For example, you can easily review a pull request on a worktree in a separate VS Code window with GitLens.

Worktrees view
Streamline Collaboration
GitLens isn’t just for solo developers—it’s designed to enhance team collaboration. Sharing code can be tricky without adding noise to your repository with extra commits or branches. GitLens simplifies this with Cloud Patches and Code Suggest, letting you share or propose changes to any file in the repository without committing or pushing to a remote.

Cloud Patches Preview
Privately and securely share code changes by creating a Cloud Patch from your work-in-progress, commit, or stash, and sharing a link with specific teammates and other developers. Cloud Patches enable early collaboration for feedback on direction and approach, reducing rework and streamlining your workflow, without adding noise to your repositories. Learn more

Code Suggest Preview
Break free from GitHub's limited, comment-only review feedback. With GitLens, you can suggest code changes directly from your IDE, just like editing a Google Doc. Provide feedback on any part of your project during a review—not just the lines changed in a PR. Learn more

Code Suggest
More Features
Side Bar Views
Our views are arranged for focus and productivity, although you can easily drag them around to suit your needs.

Side Bar views
GitLens Inspect as shown above has been manually moved into the Secondary Side Bar
💡 Use the Reset Views Layout command to quickly get back to the default layout.

GitLens Inspect
An x-ray or developer tools Inspect into your code, focused on providing contextual information and insights to what you're actively working on.

Inspect — See rich details of a commit or stash.
Line History — Jump through the revision history of the selected line(s).
File History — Explore the revision history of a file, folder, or selected lines.
Visual File History Pro — Quickly see the evolution of a file, including when changes were made, how large they were, and who made them.
Search & Compare — Search and explore for a specific commit, message, author, changed file or files, or even a specific code change, or visualize comparisons between branches, tags, commits, and more.
GitLens
Quick access to many GitLens features. Also the home of GitKraken teams and collaboration services (e.g. Cloud Patches, Cloud Workspaces), help, and support.

Home — Quick access to many features.
Cloud Patches Preview — Privately and securely share code with specific teammates
Cloud Workspaces Preview — Easily group and manage multiple repositories together, accessible from anywhere, streamlining your workflow.
Source Control
Shows additional views that are focused on exploring and managing your repositories.

Commits — Comprehensive view of the current branch commit history, including unpushed changes, upstream status, quick comparisons, and more.
Branches — Manage and navigate branches.
Remotes — Manage and navigate remotes and remote branches.
Stashes — Save and restore changes you are not yet ready to commit.
Tags — Manage and navigate tags.
Worktrees Pro — Simultaneously work on different branches of a repository.
Contributors — Ordered list of contributors, providing insights into individual contributions and involvement.
Repositories — Unifies the above views for more efficient management of multiple repositories.
(Bottom) Panel
Convenient and easy access to the Commit Graph with a dedicated details view.

Cloud Workspaces Preview
Cloud Workspaces allow you to easily group and manage multiple repositories together, accessible from anywhere, streamlining your workflow. Create workspaces just for yourself or share (coming soon in GitLens) them with your team for faster onboarding and better collaboration. Learn more

Visual File History Pro
Quickly see the evolution of a file, including when changes were made, how large they were, and who made them. Use it to quickly find when the most impactful changes were made to a file or who best to talk to about file changes and more.

Visual File History view
Interactive Rebase Editor
Easily visualize and configure interactive rebase operations with the intuitive and user-friendly Interactive Rebase Editor. Simply drag & drop to reorder commits and select which ones you want to edit, squash, or drop.

Interactive Rebase Editor
Comprehensive Commands
Stop worrying about memorizing Git commands; GitLens provides a rich set of commands to help you do everything you need.

Git Command Palette
A guided, step-by-step experience for quickly and safely executing Git commands.

Git Command Palette
Quick Access Commands
Use a series of new commands to:

Explore the commit history of branches and files
Quickly search for and navigate to (and action upon) commits
Explore a file of a commit
View and explore your stashes
Visualize the current repository status
Integrations
Context switching kills productivity. GitLens not only reveals buried knowledge within your repository, it also brings additional context from issues and pull requests providing you with a wealth of information and insights at your fingertips.

Simplify your workflow and quickly gain insights with automatic linking of issues and pull requests across multiple Git hosting services including GitHub, GitHub Enterprise Pro, GitLab, GitLab Self-Managed Pro, Jira, Gitea, Gerrit, Google Source, Bitbucket, Bitbucket Server, Azure DevOps, and custom servers.

All integrations provide automatic linking, while rich integrations with GitHub, GitLab and Jira offer detailed hover information for autolinks, and correlations between pull requests, branches, and commits, as well as user avatars for added context.

Define your own autolinks
Use autolinks to linkify external references, like Jira issues or Zendesk tickets, in commit messages.

Ready for GitLens Pro?
When you're ready to unlock the full potential of GitLens and enjoy all the benefits, consider upgrading to GitLens Pro. With GitLens Pro, you'll gain access to Pro features on privately hosted repos.

To learn more about the additional features offered with Pro, visit the GitLens Community vs GitLens Pro page.

Support and Community
Support documentation can be found on the GitLens Help Center. If you need further assistance or have any questions, there are various support channels and community forums available for GitLens:

Issue Reporting and Feature Requests
Found a bug? Have a feature request? Reach out on our GitHub Issues page.

Discussions
Join the GitLens community on GitHub Discussions to connect with other users, share your experiences, and discuss topics related to GitLens.

GitKraken Support
For any issues or inquiries related to GitLens, you can reach out to the GitKraken support team via the official support page. They will be happy to assist you with any problems you may encounter.

With GitLens Pro, you gain access to priority email support from our customer success team, ensuring higher priority and faster response times. Custom onboarding and training are also available to help you and your team quickly get up and running with a GitLens Pro plan.

Contributing
GitLens is an open-source project that greatly benefits from the contributions and feedback from its community.

Your contributions, feedback, and engagement in the GitLens community are invaluable, and play a significant role in shaping the future of GitLens. Thank you for your support!

Code Contributions
Want to contribute to GitLens? Follow the CONTRIBUTING docs to get started.

Documentation Contributions
Contributions to the documentation are greatly appreciated. If you find any areas that can be improved or have suggestions for new documentation, you can submit them as pull requests to the GitLens Docs repository.

Contributors
A big thanks to the people that have contributed to this project 🙏❤️:

Zeeshan Adnan (@zeeshanadnan) — contributions
Alex (@deadmeu) — contributions
Abdulrahman (Abdu) Assabri (@abdusabri) — contributions
Grey Baker (@greysteil) — contributions
Loris Bettazza (@Pustur) — contributions
Brian Bolte (@bolte-17) — contributions
Zach Boyle (@zaboyle) — contributions
Tony Brix (@UziTech) — contributions
Matt Buckley (@Mattadore) — contributions
Lee Chang (@MeltingMosaic) — contributions
Amanda Cameron (@AmandaCameron) — contributions
Martin Campbell (@martin-css) — contributions
Brett Cannon (@brettcannon) — contributions
Barney Carroll (@barneycarroll) — contributions
Andrea Cigana (@ciganandrea) — contributions
Ash Clarke (@ashclarke) — contributions
Travis Collins (@TravisTX) — contributions
Matt Cooper (@vtbassmatt) — contributions
Skyler Dawson (@foxwoods369) — contributions
Andrii Dieiev (@IllusionMH) — contributions
egfx-notifications (@egfx-notifications) — contributions
Segev Finer (@segevfiner) — contributions
Cory Forsyth (@bantic) — contributions
John Gee (@shadowspawn) — contributions
Geoffrey (@g3offrey) — contributions
Omar Ghazi (@omarfesal) — contributions
Neil Ghosh (@neilghosh) — contributions
Guillaume Rozan (@grozan) — contributions
Guillem González Vela (@guillemglez) — contributions
Vladislav Guleaev (@vguleaev) — contributions
Dmitry Gurovich (@yrtimiD) — contributions
hahaaha (@hahaaha) — contributions
Victor Hallberg (@mogelbrod) — contributions
Ken Hom (@kh0m) — contributions
Yukai Huang (@Yukaii) — contributions
Justin Hutchings (@jhutchings1) — contributions
Roy Ivy III (@rivy) — contributions
Helmut Januschka (@hjanuschka) — contributions
jogo- (@jogo-) — contributions
Nils K (@septatrix) — contributions
Chris Kaczor (@ckaczor) — contributions
Aidos Kanapyanov (@aidoskanapyanov) — contributions
Allan Karlson (@bees4ever) — contributions
Nafiur Rahman Khadem (@ShafinKhadem) — contributions
Mathew King (@MathewKing) — contributions
Lior Kletter (@Git-Lior) — contributions
Chase Knowlden (@ChaseKnowlden) — contributions
Andrei Korigodski (@korigod) — contributions
Kwok (@mankwok) — contributions
Marc Lasson (@mlasson) — contributions
John Letey (@johnletey) — contributions
Stanislav Lvovsky (@slavik-lvovsky) — contributions
Peng Lyu (@rebornix) — contributions
Cédric Malard (@cmalard) — contributions
Asif Kamran Malick (@akmalick) — contributions
Sam Martin (@smartinio) — contributions
mcy-kylin (@mcy-kylin) — contributions
Mark Molinaro (@markjm) — contributions
Ahmadou Waly Ndiaye (@sir-kain) — contributions
Nguyen Long Nhat (@torn4dom4n) — contributions
Dave Nicolson (@dnicolson) — contributions
Aurelio Ogliari (@nobitagit) — contributions
Raaj Patil (@arrpee) — contributions
Kevin Paxton (kpaxton) — contributions
Connor Peet (@connor4312) — contributions
Maxim Pekurin (@pmaxim25) — contributions
Leo Dan Peña (@leo9-py) — contributions
Aman Prakash (@gitgoap) — contributions
Arunprasad Rajkumar (@arajkumar) — contributions
David Rees (@studgeek) — contributions
Rickard (@rickardp) — contributions
Johannes Rieken (@jrieken) — contributions
Daniel Rodríguez (@sadasant) — contributions
Guillaume Rozan (@rozangu1) — contributions
ryenus (@ryenus) — contributions
Felipe Santos (@felipecrs) — contributions
Andrew Savage (@andrewsavage1) — contributions
Zack Schuster (@zackschuster) — contributions
Matt Seddon (@mattseddon) — contributions
Ahmadali Shafiee (@ahmadalli) — contributions
Shashank Shastri (@Shashank-Shastri) — contributions
Skybbles (@Luxray5474) — contributions
Brendon Smith (@br3ndonland) — contributions
Ross Smith II (@rasa) — contributions
Oleg Solomka (@legomushroom) — contributions
Miguel Solorio (@misolori) — contributions
SpaceEEC (@SpaceEEC) — contributions
stampyzfanz (@stampyzfanz) — contributions
sueka (@sueka) — contributions
Mike Surcouf (@mikes-gh) — contributions
Alexey Svetliakov (@asvetliakov) — contributions
Takashi Tamura (@tamuratak) — contributions
Andy Tang (@thewindsofwinter) — contributions
Dmitry Ulupov (@dimaulupov) — contributions
Alexey Vasyukov (@notmedia) — contributions
Ivan Volzhev (@ivolzhevbt) — contributions
x13machine (@x13machine) — contributions
Alwin Wang (@alwinw) — contributions
Ian Wilkinson (@sgtwilko) — contributions
Brian Williams (@Brcrwilliams) — contributions
Adaex Yang (@adaex) — contributions
Yan Zhang (@Eskibear) — contributions
Zyck (@qzyse2017) — contributions
Yonatan Greenfeld (@YonatanGreenfeld) — contributions
WofWca (@WofWca) — contributions
不见月 (@nooooooom) — contributions
Ian Chamberlain (@ian-h-chamberlain) — contributions
Brandon Cheng (@gluxon) — contributions
yutotnh (@yutotnh) — contributions
may (@m4rch3n1ng) — contributions
bm-w (@bm-w) — contributions
Tyler Johnson (@TJohnsonSE) — contributions
Jean Pierre (@jeanp413) — contributions
Dawn Hwang (@hwangh95) — contributions
Emmanuel Ferdman (@emmanuel-ferdman) — contributions
Jordon Kashanchi (@jordonkash) — contributions
JounQin (@JounQin) — contributions
Noritaka Kobayashi (@noritaka1166) — contributions
Also special thanks to the people that have provided support, testing, brainstorming, etc:

Brian Canzanella (@bcanzanella)
Matt King (@KattMingMing)
And of course the awesome vscode team!

License
This repository contains both OSS-licensed and non-OSS-licensed files.

All files in or under any directory named "plus" fall under LICENSE.plus.

The remaining files fall under the MIT license.