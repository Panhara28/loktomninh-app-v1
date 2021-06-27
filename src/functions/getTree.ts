export function buildTree(data: any) {
  const hash: { [key: number]: any } = {
    0: {
      children: [],
      id: 0,
      name: "",
      slug: "",
      path: "",
      dataImage: "",
      product: [],
    },
  };

  // Create all the hash
  for (const item of data) {
    const node: any = {
      id: item?.id,
      name: item?.category_name as string,
      slug: item?.slug as string,
      dataImage: item?.image,
      product: item?.product,
      path: "",
      children: [],
    };

    hash[item.id] = node;
  }

  // Attach all the children
  for (const item of data) {
    if (item.parent) {
      if (hash[item.parent]) {
        hash[item.parent].children.push(hash[item.id]);
      }
    } else {
      hash[0].children.push(hash[item.id]);
    }
  }

  // buildPath("", hash[0].children);

  return {
    root: hash[0],
    hash,
  };
}
