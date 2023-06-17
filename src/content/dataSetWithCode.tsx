export const CodeData1 = [
  {"repo": "soimort/you-get", "path": "src/you_get/extractors/youtube.py", "func_name": "YouTube.get_vid_from_url", "original_string": "def get_vid_from_url(url):\n        \"\"\"Extracts video ID from URL.\n        \"\"\"\n        return match1(url, r'youtu\\.be/([^?/]+)') or \\\n          match1(url, r'youtube\\.com/embed/([^/?]+)') or \\\n          match1(url, r'youtube\\.com/v/([^/?]+)') or \\\n          match1(url, r'youtube\\.com/watch/([^/?]+)') or \\\n          parse_query_param(url, 'v') or \\\n          parse_query_param(parse_query_param(url, 'u'), 'v')", "language": "python", "code": "def get_vid_from_url(url):\n        \"\"\"Extracts video ID from URL.\n        \"\"\"\n        return match1(url, r'youtu\\.be/([^?/]+)') or \\\n          match1(url, r'youtube\\.com/embed/([^/?]+)') or \\\n          match1(url, r'youtube\\.com/v/([^/?]+)') or \\\n          match1(url, r'youtube\\.com/watch/([^/?]+)') or \\\n          parse_query_param(url, 'v') or \\\n          parse_query_param(parse_query_param(url, 'u'), 'v')", "code_tokens": ["def", "get_vid_from_url", "(", "url", ")", ":", "return", "match1", "(", "url", ",", "r'youtu\\.be/([^?/]+)'", ")", "or", "match1", "(", "url", ",", "r'youtube\\.com/embed/([^/?]+)'", ")", "or", "match1", "(", "url", ",", "r'youtube\\.com/v/([^/?]+)'", ")", "or", "match1", "(", "url", ",", "r'youtube\\.com/watch/([^/?]+)'", ")", "or", "parse_query_param", "(", "url", ",", "'v'", ")", "or", "parse_query_param", "(", "parse_query_param", "(", "url", ",", "'u'", ")", ",", "'v'", ")"], "docstring": "Extracts video ID from URL.", "docstring_tokens": ["Extracts", "video", "ID", "from", "URL", "."], "sha": "b746ac01c9f39de94cac2d56f665285b0523b974", "url": "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/youtube.py#L135-L143", "partition": "test"},
  {"repo": "soimort/you-get", "path": "src/you_get/extractors/miomio.py", "func_name": "sina_xml_to_url_list", "original_string": "def sina_xml_to_url_list(xml_data):\n    \"\"\"str->list\n    Convert XML to URL List.\n    From Biligrab.\n    \"\"\"\n    rawurl = []\n    dom = parseString(xml_data)\n    for node in dom.getElementsByTagName('durl'):\n        url = node.getElementsByTagName('url')[0]\n        rawurl.append(url.childNodes[0].data)\n    return rawurl", "language": "python", "code": "def sina_xml_to_url_list(xml_data):\n    \"\"\"str->list\n    Convert XML to URL List.\n    From Biligrab.\n    \"\"\"\n    rawurl = []\n    dom = parseString(xml_data)\n    for node in dom.getElementsByTagName('durl'):\n        url = node.getElementsByTagName('url')[0]\n        rawurl.append(url.childNodes[0].data)\n    return rawurl", "code_tokens": ["def", "sina_xml_to_url_list", "(", "xml_data", ")", ":", "rawurl", "=", "[", "]", "dom", "=", "parseString", "(", "xml_data", ")", "for", "node", "in", "dom", ".", "getElementsByTagName", "(", "'durl'", ")", ":", "url", "=", "node", ".", "getElementsByTagName", "(", "'url'", ")", "[", "0", "]", "rawurl", ".", "append", "(", "url", ".", "childNodes", "[", "0", "]", ".", "data", ")", "return", "rawurl"], "docstring": "str->list\n    Convert XML to URL List.\n    From Biligrab.", "docstring_tokens": ["str", "-", ">", "list", "Convert", "XML", "to", "URL", "List", ".", "From", "Biligrab", "."], "sha": "b746ac01c9f39de94cac2d56f665285b0523b974", "url": "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/miomio.py#L41-L51", "partition": "test"},
  {"repo": "soimort/you-get", "path": "src/you_get/extractors/fc2video.py", "func_name": "makeMimi", "original_string": "def makeMimi(upid):\n    \"\"\"From http://cdn37.atwikiimg.com/sitescript/pub/dksitescript/FC2.site.js\n    Also com.hps.util.fc2.FC2EncrptUtil.makeMimiLocal\n    L110\"\"\"\n    strSeed = \"gGddgPfeaf_gzyr\"\n    prehash = upid + \"_\" + strSeed\n    return md5(prehash.encode('utf-8')).hexdigest()", "language": "python", "code": "def makeMimi(upid):\n    \"\"\"From http://cdn37.atwikiimg.com/sitescript/pub/dksitescript/FC2.site.js\n    Also com.hps.util.fc2.FC2EncrptUtil.makeMimiLocal\n    L110\"\"\"\n    strSeed = \"gGddgPfeaf_gzyr\"\n    prehash = upid + \"_\" + strSeed\n    return md5(prehash.encode('utf-8')).hexdigest()", "code_tokens": ["def", "makeMimi", "(", "upid", ")", ":", "strSeed", "=", "\"gGddgPfeaf_gzyr\"", "prehash", "=", "upid", "+", "\"_\"", "+", "strSeed", "return", "md5", "(", "prehash", ".", "encode", "(", "'utf-8'", ")", ")", ".", "hexdigest", "(", ")"], "docstring": "From http://cdn37.atwikiimg.com/sitescript/pub/dksitescript/FC2.site.js\n    Also com.hps.util.fc2.FC2EncrptUtil.makeMimiLocal\n    L110", "docstring_tokens": ["From", "http", ":", "//", "cdn37", ".", "atwikiimg", ".", "com", "/", "sitescript", "/", "pub", "/", "dksitescript", "/", "FC2", ".", "site", ".", "js", "Also", "com", ".", "hps", ".", "util", ".", "fc2", ".", "FC2EncrptUtil", ".", "makeMimiLocal", "L110"], "sha": "b746ac01c9f39de94cac2d56f665285b0523b974", "url": "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/fc2video.py#L11-L17", "partition": "test"},
  {"repo": "soimort/you-get", "path": "src/you_get/extractors/fc2video.py", "func_name": "fc2video_download", "original_string": "def fc2video_download(url, output_dir = '.', merge = True, info_only = False, **kwargs):\n    \"\"\"wrapper\"\"\"\n    #'http://video.fc2.com/en/content/20151021bTVKnbEw'\n    #'http://xiaojiadianvideo.asia/content/20151021bTVKnbEw'\n    #'http://video.fc2.com/ja/content/20151021bTVKnbEw'\n    #'http://video.fc2.com/tw/content/20151021bTVKnbEw'\n    hostname = urlparse(url).hostname\n    if not ('fc2.com' in hostname or 'xiaojiadianvideo.asia' in hostname):\n        return False\n    upid = match1(url, r'.+/content/(\\w+)')\n\n    fc2video_download_by_upid(upid, output_dir, merge, info_only)", "language": "python", "code": "def fc2video_download(url, output_dir = '.', merge = True, info_only = False, **kwargs):\n    \"\"\"wrapper\"\"\"\n    #'http://video.fc2.com/en/content/20151021bTVKnbEw'\n    #'http://xiaojiadianvideo.asia/content/20151021bTVKnbEw'\n    #'http://video.fc2.com/ja/content/20151021bTVKnbEw'\n    #'http://video.fc2.com/tw/content/20151021bTVKnbEw'\n    hostname = urlparse(url).hostname\n    if not ('fc2.com' in hostname or 'xiaojiadianvideo.asia' in hostname):\n        return False\n    upid = match1(url, r'.+/content/(\\w+)')\n\n    fc2video_download_by_upid(upid, output_dir, merge, info_only)", "code_tokens": ["def", "fc2video_download", "(", "url", ",", "output_dir", "=", "'.'", ",", "merge", "=", "True", ",", "info_only", "=", "False", ",", "*", "*", "kwargs", ")", ":", "#'http://video.fc2.com/en/content/20151021bTVKnbEw'", "#'http://xiaojiadianvideo.asia/content/20151021bTVKnbEw'", "#'http://video.fc2.com/ja/content/20151021bTVKnbEw'", "#'http://video.fc2.com/tw/content/20151021bTVKnbEw'", "hostname", "=", "urlparse", "(", "url", ")", ".", "hostname", "if", "not", "(", "'fc2.com'", "in", "hostname", "or", "'xiaojiadianvideo.asia'", "in", "hostname", ")", ":", "return", "False", "upid", "=", "match1", "(", "url", ",", "r'.+/content/(\\w+)'", ")", "fc2video_download_by_upid", "(", "upid", ",", "output_dir", ",", "merge", ",", "info_only", ")"], "docstring": "wrapper", "docstring_tokens": ["wrapper"], "sha": "b746ac01c9f39de94cac2d56f665285b0523b974", "url": "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/fc2video.py#L46-L57", "partition": "test"},
  {"repo": "soimort/you-get", "path": "src/you_get/extractors/dailymotion.py", "func_name": "dailymotion_download", "original_string": "def dailymotion_download(url, output_dir='.', merge=True, info_only=False, **kwargs):\n    \"\"\"Downloads Dailymotion videos by URL.\n    \"\"\"\n\n    html = get_content(rebuilt_url(url))\n    info = json.loads(match1(html, r'qualities\":({.+?}),\"'))\n    title = match1(html, r'\"video_title\"\\s*:\\s*\"([^\"]+)\"') or \\\n            match1(html, r'\"title\"\\s*:\\s*\"([^\"]+)\"')\n    title = unicodize(title)\n\n    for quality in ['1080','720','480','380','240','144','auto']:\n        try:\n            real_url = info[quality][1][\"url\"]\n            if real_url:\n                break\n        except KeyError:\n            pass\n\n    mime, ext, size = url_info(real_url)\n\n    print_info(site_info, title, mime, size)\n    if not info_only:\n        download_urls([real_url], title, ext, size, output_dir=output_dir, merge=merge)", "language": "python", "code": "def dailymotion_download(url, output_dir='.', merge=True, info_only=False, **kwargs):\n    \"\"\"Downloads Dailymotion videos by URL.\n    \"\"\"\n\n    html = get_content(rebuilt_url(url))\n    info = json.loads(match1(html, r'qualities\":({.+?}),\"'))\n    title = match1(html, r'\"video_title\"\\s*:\\s*\"([^\"]+)\"') or \\\n            match1(html, r'\"title\"\\s*:\\s*\"([^\"]+)\"')\n    title = unicodize(title)\n\n    for quality in ['1080','720','480','380','240','144','auto']:\n        try:\n            real_url = info[quality][1][\"url\"]\n            if real_url:\n                break\n        except KeyError:\n            pass\n\n    mime, ext, size = url_info(real_url)\n\n    print_info(site_info, title, mime, size)\n    if not info_only:\n        download_urls([real_url], title, ext, size, output_dir=output_dir, merge=merge)", "code_tokens": ["def", "dailymotion_download", "(", "url", ",", "output_dir", "=", "'.'", ",", "merge", "=", "True", ",", "info_only", "=", "False", ",", "*", "*", "kwargs", ")", ":", "html", "=", "get_content", "(", "rebuilt_url", "(", "url", ")", ")", "info", "=", "json", ".", "loads", "(", "match1", "(", "html", ",", "r'qualities\":({.+?}),\"'", ")", ")", "title", "=", "match1", "(", "html", ",", "r'\"video_title\"\\s*:\\s*\"([^\"]+)\"'", ")", "or", "match1", "(", "html", ",", "r'\"title\"\\s*:\\s*\"([^\"]+)\"'", ")", "title", "=", "unicodize", "(", "title", ")", "for", "quality", "in", "[", "'1080'", ",", "'720'", ",", "'480'", ",", "'380'", ",", "'240'", ",", "'144'", ",", "'auto'", "]", ":", "try", ":", "real_url", "=", "info", "[", "quality", "]", "[", "1", "]", "[", "\"url\"", "]", "if", "real_url", ":", "break", "except", "KeyError", ":", "pass", "mime", ",", "ext", ",", "size", "=", "url_info", "(", "real_url", ")", "print_info", "(", "site_info", ",", "title", ",", "mime", ",", "size", ")", "if", "not", "info_only", ":", "download_urls", "(", "[", "real_url", "]", ",", "title", ",", "ext", ",", "size", ",", "output_dir", "=", "output_dir", ",", "merge", "=", "merge", ")"], "docstring": "Downloads Dailymotion videos by URL.", "docstring_tokens": ["Downloads", "Dailymotion", "videos", "by", "URL", "."], "sha": "b746ac01c9f39de94cac2d56f665285b0523b974", "url": "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/dailymotion.py#L13-L35", "partition": "test"},
  {"repo": "soimort/you-get", "path": "src/you_get/extractors/ucas.py", "func_name": "dictify", "original_string": "def dictify(r,root=True):\n    \"\"\"http://stackoverflow.com/a/30923963/2946714\"\"\"\n    if root:\n        return {r.tag : dictify(r, False)}\n    d=copy(r.attrib)\n    if r.text:\n        d[\"_text\"]=r.text\n    for x in r.findall(\"./*\"):\n        if x.tag not in d:\n            d[x.tag]=[]\n        d[x.tag].append(dictify(x,False))\n    return d", "language": "python", "code": "def dictify(r,root=True):\n    \"\"\"http://stackoverflow.com/a/30923963/2946714\"\"\"\n    if root:\n        return {r.tag : dictify(r, False)}\n    d=copy(r.attrib)\n    if r.text:\n        d[\"_text\"]=r.text\n    for x in r.findall(\"./*\"):\n        if x.tag not in d:\n            d[x.tag]=[]\n        d[x.tag].append(dictify(x,False))\n    return d", "code_tokens": ["def", "dictify", "(", "r", ",", "root", "=", "True", ")", ":", "if", "root", ":", "return", "{", "r", ".", "tag", ":", "dictify", "(", "r", ",", "False", ")", "}", "d", "=", "copy", "(", "r", ".", "attrib", ")", "if", "r", ".", "text", ":", "d", "[", "\"_text\"", "]", "=", "r", ".", "text", "for", "x", "in", "r", ".", "findall", "(", "\"./*\"", ")", ":", "if", "x", ".", "tag", "not", "in", "d", ":", "d", "[", "x", ".", "tag", "]", "=", "[", "]", "d", "[", "x", ".", "tag", "]", ".", "append", "(", "dictify", "(", "x", ",", "False", ")", ")", "return", "d"], "docstring": "http://stackoverflow.com/a/30923963/2946714", "docstring_tokens": ["http", ":", "//", "stackoverflow", ".", "com", "/", "a", "/", "30923963", "/", "2946714"], "sha": "b746ac01c9f39de94cac2d56f665285b0523b974", "url": "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/ucas.py#L18-L29", "partition": "test"},
  {"repo": "soimort/you-get", "path": "src/you_get/extractors/ucas.py", "func_name": "ucas_download_single", "original_string": "def ucas_download_single(url, output_dir = '.', merge = False, info_only = False, **kwargs):\n    '''video page'''\n    html = get_content(url)\n    # resourceID is UUID\n    resourceID = re.findall( r'resourceID\":\"([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})', html)[0]\n    assert resourceID != '', 'Cannot find resourceID!'\n\n    title = match1(html, r'<div class=\"bc-h\">(.+)</div>')\n    url_lists = _ucas_get_url_lists_by_resourceID(resourceID)\n    assert url_lists, 'Cannot find any URL of such class!'\n    \n    for k, part in enumerate(url_lists):\n        part_title = title + '_' + str(k)\n        print_info(site_info, part_title, 'flv', 0)\n        if not info_only:\n            download_urls(part, part_title, 'flv', total_size=None, output_dir=output_dir, merge=merge)", "language": "python", "code": "def ucas_download_single(url, output_dir = '.', merge = False, info_only = False, **kwargs):\n    '''video page'''\n    html = get_content(url)\n    # resourceID is UUID\n    resourceID = re.findall( r'resourceID\":\"([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})', html)[0]\n    assert resourceID != '', 'Cannot find resourceID!'\n\n    title = match1(html, r'<div class=\"bc-h\">(.+)</div>')\n    url_lists = _ucas_get_url_lists_by_resourceID(resourceID)\n    assert url_lists, 'Cannot find any URL of such class!'\n    \n    for k, part in enumerate(url_lists):\n        part_title = title + '_' + str(k)\n        print_info(site_info, part_title, 'flv', 0)\n        if not info_only:\n            download_urls(part, part_title, 'flv', total_size=None, output_dir=output_dir, merge=merge)", "code_tokens": ["def", "ucas_download_single", "(", "url", ",", "output_dir", "=", "'.'", ",", "merge", "=", "False", ",", "info_only", "=", "False", ",", "*", "*", "kwargs", ")", ":", "html", "=", "get_content", "(", "url", ")", "# resourceID is UUID", "resourceID", "=", "re", ".", "findall", "(", "r'resourceID\":\"([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})'", ",", "html", ")", "[", "0", "]", "assert", "resourceID", "!=", "''", ",", "'Cannot find resourceID!'", "title", "=", "match1", "(", "html", ",", "r'<div class=\"bc-h\">(.+)</div>'", ")", "url_lists", "=", "_ucas_get_url_lists_by_resourceID", "(", "resourceID", ")", "assert", "url_lists", ",", "'Cannot find any URL of such class!'", "for", "k", ",", "part", "in", "enumerate", "(", "url_lists", ")", ":", "part_title", "=", "title", "+", "'_'", "+", "str", "(", "k", ")", "print_info", "(", "site_info", ",", "part_title", ",", "'flv'", ",", "0", ")", "if", "not", "info_only", ":", "download_urls", "(", "part", ",", "part_title", ",", "'flv'", ",", "total_size", "=", "None", ",", "output_dir", "=", "output_dir", ",", "merge", "=", "merge", ")"], "docstring": "video page", "docstring_tokens": ["video", "page"], "sha": "b746ac01c9f39de94cac2d56f665285b0523b974", "url": "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/ucas.py#L102-L117", "partition": "test"},
  {"repo": "soimort/you-get", "path": "src/you_get/extractors/ucas.py", "func_name": "ucas_download_playlist", "original_string": "def ucas_download_playlist(url, output_dir = '.', merge = False, info_only = False, **kwargs):\n    '''course page'''\n    html = get_content(url)\n\n    parts = re.findall( r'(getplaytitle.do\\?.+)\"', html)\n    assert parts, 'No part found!'\n\n    for part_path in parts:\n        ucas_download('http://v.ucas.ac.cn/course/' + part_path, output_dir=output_dir, merge=merge, info_only=info_only)", "language": "python", "code": "def ucas_download_playlist(url, output_dir = '.', merge = False, info_only = False, **kwargs):\n    '''course page'''\n    html = get_content(url)\n\n    parts = re.findall( r'(getplaytitle.do\\?.+)\"', html)\n    assert parts, 'No part found!'\n\n    for part_path in parts:\n        ucas_download('http://v.ucas.ac.cn/course/' + part_path, output_dir=output_dir, merge=merge, info_only=info_only)", "code_tokens": ["def", "ucas_download_playlist", "(", "url", ",", "output_dir", "=", "'.'", ",", "merge", "=", "False", ",", "info_only", "=", "False", ",", "*", "*", "kwargs", ")", ":", "html", "=", "get_content", "(", "url", ")", "parts", "=", "re", ".", "findall", "(", "r'(getplaytitle.do\\?.+)\"'", ",", "html", ")", "assert", "parts", ",", "'No part found!'", "for", "part_path", "in", "parts", ":", "ucas_download", "(", "'http://v.ucas.ac.cn/course/'", "+", "part_path", ",", "output_dir", "=", "output_dir", ",", "merge", "=", "merge", ",", "info_only", "=", "info_only", ")"], "docstring": "course page", "docstring_tokens": ["course", "page"], "sha": "b746ac01c9f39de94cac2d56f665285b0523b974", "url": "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/ucas.py#L119-L127", "partition": "test"}
]