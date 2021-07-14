let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/program/react/personalSite/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +12 pages/index.js
badd +43 components/Header.js
badd +15 styles/Global.css
badd +27 pages/projects.js
badd +24 ~/program/react/personalSite/gatsby-config.js
badd +1 markdown-pages/pages/index.md
badd +1 markdown-pages/posts/post-1.md
badd +10 markdown-pages/pages/projects.md
badd +4 components/Utility.js
argglobal
%argdel
edit components/Header.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
let s:l = 43 - ((18 * winheight(0) + 22) / 45)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
43
normal! 07|
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
