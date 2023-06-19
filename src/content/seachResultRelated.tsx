export const top100Films = [
  {
    code: "def get_vid_from_url(url):\n        \"\"\"Extracts video ID from URL.\n        \"\"\"\n        return match1(url, r'youtu\\.be\\/([^?\\/]+)') or \\\n          match1(url, r'youtube\\.com\\/embed\\/([^\\/]+)') or \\\n          match1(url, r'youtube\\.com\\/v\\/([^\\/]+)') or \\\n          match1(url, r'youtube\\.com\\/watch\\/([^\\/]+)') or \\\n          parse_query_param(url, 'v') or \\\n          parse_query_param(parse_query_param(url, 'u'), 'v')",
    docstring: "Extracts video ID from URL.",
    url: "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/youtube.py#L135-L143",
  },
  {
    code: 'def sina_xml_to_url_list(xml_data):\n    """str->list\n    Convert XML to URL List.\n    From Biligrab.\n    """\n    rawurl = []\n    dom = parseString(xml_data)\n    for node in dom.getElementsByTagName(\'durl\'):\n        url = node.getElementsByTagName(\'url\')[0]\n        rawurl.append(url.childNodes[0].data)\n    return rawurl',
    docstring: "str->list\n    Convert XML to URL List.\n    From Biligrab.",
    url: "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/miomio.py#L41-L51",
  },
  {
    code: 'def makeMimi(upid):\n    """From http://cdn37.atwikiimg.com/sitescript/pub/dksitescript/FC2.site.js\n    Also com.hps.util.fc2.FC2EncrptUtil.makeMimiLocal\n    L110"""\n    strSeed = "gGddgPfeaf_gzyr"\n    prehash = upid + "_" + strSeed\n    return md5(prehash.encode(\'utf-8\')).hexdigest()',
    docstring:
      "From http://cdn37.atwikiimg.com/sitescript/pub/dksitescript/FC2.site.js\n    Also com.hps.util.fc2.FC2EncrptUtil.makeMimiLocal\n    L110",
    url: "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/fc2video.py#L11-L17",
  },
  {
    code: "def fc2video_download(url, output_dir='.', merge=True, info_only=False, **kwargs):\n    \"\"\"wrapper\"\"\"\n    #'http://video.fc2.com/en/content/20151021bTVKnbEw'\n    #'http://xiaojiadianvideo.asia/content/20151021bTVKnbEw'\n    #'http://video.fc2.com/ja/content/20151021bTVKnbEw'\n    #'http://video.fc2.com/tw/content/20151021bTVKnbEw'\n    hostname = urlparse(url).hostname\n    if not ('fc2.com' in hostname or 'xiaojiadianvideo.asia' in hostname):\n        return False\n    upid = match1(url, r'.+\\/content\\/(\\\\w+)')\n\n    fc2video_download_by_upid(upid, output_dir, merge, info_only)",
    docstring: "wrapper",
    url: "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/fc2video.py#L46-L57",
  },
  {
    code: "def dailymotion_download(url, output_dir='.', merge=True, info_only=False, *kwargs):\n    \"\"\"Downloads Dailymotion videos by URL.\n    \"\"\"\n\n    html = get_content(rebuilt_url(url))\n    info = json.loads(match1(html, r'qualities\":({.+?}),\"'))\n    title = match1(html, r'\"video_title\"\\s:\\s*\"([^\"]+)\"') or \\\n            match1(html, r'\"title\"\\s*:\\s*\"([^\"]+)\"')\n    title = unicodize(title)\n\n    for quality in ['1080','720','480','380','240','144','auto']:\n        try:\n            real_url = info[quality][1][\"url\"]\n            if real_url:\n                break\n        except KeyError:\n            pass\n\n    mime, ext, size = url_info(real_url)\n\n    print_info(site_info, title, mime, size)\n    if not info_only:\n        download_urls([real_url], title, ext, size, output_dir=output_dir, merge=merge)",
    docstring: "Downloads Dailymotion videos by URL.",
    url: "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/dailymotion.py#L13-L35",
  },
  {
    code: 'def dictify(r,root=True):\n    """http://stackoverflow.com/a/30923963/2946714"""\n    if root:\n        return {r.tag : dictify(r, False)}\n    d=copy(r.attrib)\n    if r.text:\n        d["_text"]=r.text\n    for x in r.findall("./*"):\n        if x.tag not in d:\n            d[x.tag]=[]\n        d[x.tag].append(dictify(x,False))\n    return d',
    docstring: "http://stackoverflow.com/a/30923963/2946714",
    url: "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/ucas.py#L18-L29",
  },
  {
    code: "def ucas_download_single(url, output_dir='.', merge=False, info_only=False, **kwargs):\n    '''video page'''\n    html = get_content(url)\n    # resourceID is UUID\n    resourceID = re.findall( r'resourceID\":\"([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})', html)[0]\n    assert resourceID != '', 'Cannot find resourceID!'\n\n    title = match1(html, r'<div class=\"bc-h\">(.+)</div>')\n    url_lists = _ucas_get_url_lists_by_resourceID(resourceID)\n    assert url_lists, 'Cannot find any URL of such class!'\n    \n    for k, part in enumerate(url_lists):\n        part_title = title + '_' + str(k)\n        print_info(site_info, part_title, 'flv', 0)\n        if not info_only:\n            download_urls(part, part_title, 'flv', total_size=None, output_dir=output_dir, merge=merge)",
    docstring: "video page",
    url: "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/ucas.py#L102-L117",
  },
  {
    code: "def ucas_download_playlist(url, output_dir='.', merge=False, info_only=False, **kwargs):\n    '''course page'''\n    html = get_content(url)\n\n    parts = re.findall( r'(getplaytitle.do\\?.+)\"', html)\n    assert parts, 'No part found!'\n\n    for part_path in parts:\n        ucas_download('http://v.ucas.ac.cn/course/' + part_path, output_dir=output_dir, merge=merge, info_only=info_only)",
    docstring: "course page",
    url: "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/ucas.py#L119-L127",
  },
  {
    code: "def sina_download_by_vid(vid, title=None, output_dir='.', merge=True, info_only=False):\n    \"\"\"Downloads a Sina video by its unique vid.\n    http://video.sina.com.cn/\n    \"\"\"\n    xml = api_req(vid)\n    urls, name, size = video_info(xml)\n    if urls is None:\n        log.wtf(name)\n    title = name\n    print_info(site_info, title, 'flv', size)\n    if not info_only:\n        download_urls(urls, title, 'flv', size, output_dir = output_dir, merge = merge)",
    docstring:
      "Downloads a Sina video by its unique vid.\n    http://video.sina.com.cn/",
    url: "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/sina.py#L41-L52",
  },
  {
    code: "def fc2video_download(url, output_dir='.', merge=True, info_only=False, **kwargs):\n    \"\"\"Wrapper.\"\"\"\n    hostname = urlparse(url).hostname\n    if not ('fc2.com' in hostname or 'xiaojiadianvideo.asia' in hostname):\n        return False\n    upid = match1(url, r'.+/content/(\\w+)')\n\n    fc2video_download_by_upid(upid, output_dir, merge, info_only)",
    docstring: "Wrapper.",
    url: "https://github.com/soimort/you-get/blob/b746ac01c9f39de94cac2d56f665285b0523b974/src/you_get/extractors/fc2video.py#L19-L25",
  },
];
