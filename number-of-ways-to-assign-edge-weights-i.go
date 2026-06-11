package main

func assignEdgeWeights(edges [][]int) int {
	n := len(edges) + 1

	adj := make([][]int, n+1)
	for _, e := range edges {
		u, v := e[0], e[1]
		adj[u] = append(adj[u], v)
		adj[v] = append(adj[v], u)
	}

	// BFS
	depth := make([]int, n+1)
	for i := range depth {
		depth[i] = -1
	}

	queue := make([]int, 0)
	queue = append(queue, 1)
	depth[1] = 0

	maxDepth := 0
	head := 0

	for head < len(queue) {
		node := queue[head]
		head++

		for _, nei := range adj[node] {
			if depth[nei] == -1 {
				depth[nei] = depth[node] + 1
				if depth[nei] > maxDepth {
					maxDepth = depth[nei]
				}
				queue = append(queue, nei)
			}
		}
	}

	if maxDepth == 0 {
		return 1
	}

	// compute 2^(maxDepth-1)
	mod := 1_000_000_007
	exp := maxDepth - 1

	res := 1
	base := 2

	for exp > 0 {
		if exp%2 == 1 {
			res = (res * base) % mod
		}
		base = (base * base) % mod
		exp /= 2
	}

	return res
}